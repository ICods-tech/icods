import path from 'path';
import fs from 'fs';
import util from 'util';
import aws from 'aws-sdk';
import { container } from 'tsyringe';
import { Request, Response } from 'express';
const exec = util.promisify(require('child_process').exec);
import GetUserQRCodeService from '@modules/QRCodes/services/GetUserQRCodeService';
import GetUserQRCodesService from '@modules/Users/services/user/GetUserQRCodesService';
import AddQRCodeContentService from '@modules/QRCodes/services/AddQRCodeContentService';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
interface MulterRequest extends Request {
  file: Express.MulterS3.File;
}

const s3 = new aws.S3();
export default class UserQRCodesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const getUserQRCodesService = container.resolve(GetUserQRCodesService);
      const qrcodes = await getUserQRCodesService.run(user_id);

      return response.json(qrcodes);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { qrcode_id } = request.params;
      console.log(qrcode_id);
      const getUserQRCodeService = container.resolve(GetUserQRCodeService);
      const qrcode = await getUserQRCodeService.run(qrcode_id);

      return response.json(qrcode);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { qrcode_id } = request.params;
      const {
        originalname: name,
        size,
        key,
        location: url = '',
      } = (request as MulterRequest).file;
      const ending_videorootPath = path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        '..',
        '..',
      );
      const tmpPath = path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        '..',
        '..',
        'tmp',
      );

      const { stdout, stderr } = await exec(
        `npx ffmpeg -i ${url} -i ${ending_videorootPath}/icods.mp4 -filter_complex "[0:v] [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]" -vsync 2 -map "[v]" -map "[a]" ${tmpPath}/${key}`,
      );
      console.log('stdout:', stdout);
      console.error('stderr:', stderr);

      const addQRCodeContentService = container.resolve(
        AddQRCodeContentService,
      );

      const movieStream = fs.createReadStream(`${tmpPath}/${key}`);
      const params: PutObjectRequest = {
        ACL: 'public-read',
        Body: movieStream,
        Bucket: process.env.BUCKET_NAME as string,
        Key: key,
        ContentType: "video/mp4"
      };

      //await putS3Object(params, movieStream);
      await s3.putObject(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
      });
      fs.unlinkSync(`` + tmpPath + `/${key}`);
      const qrcode = await addQRCodeContentService.run(
        qrcode_id,
        name,
        size,
        key,
        url,
      );

      return response.json(qrcode);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }

  public async putS3Object(
    params: PutObjectRequest,
    body: any,
  ): Promise<void> {}
}
