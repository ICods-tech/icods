import fs from 'fs'
import util from 'util'
import path from 'path'
import aws from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
const exec = util.promisify(require('child_process').exec);

export default class UploadVideoToS3Service {
  public async run(url: string, key: string): Promise<void> {
    const s3 = new aws.S3();
    const endingVideoRootPath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..'
    );
    const tmpPath = endingVideoRootPath + '/tmp'

    await exec(
      `npx ffmpeg -i ${url} -i ${endingVideoRootPath}/icods.mp4 -filter_complex "[0:v]
       [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]" -vsync 2 -map "[v]" -map "[a]" ${tmpPath}/${key}`,
    );

    const movieStream = fs.createReadStream(`${tmpPath}/${key}`);
    const params: PutObjectRequest = {
      ACL: 'public-read',
      Body: movieStream,
      Bucket: process.env.BUCKET_NAME as string || 'icods-studio',
      Key: key,
      ContentType: "video/mp4"
    };

    await s3.putObject(params, function (err, data) {
      if (err) console.log(err, err.stack);
    });
    fs.unlinkSync(`` + tmpPath + `/${key}`);
  }
}
