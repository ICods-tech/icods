import { container } from 'tsyringe';
import { Request, Response } from 'express';
import GetUserQRCodeService from '@modules/QRCodes/services/GetUserQRCodeService';
import GetUserQRCodesService from '@modules/Users/services/user/GetUserQRCodesService';
import AddQRCodeContentService from '@modules/QRCodes/services/AddQRCodeContentService';
import HandleStatusQRCodeService from '../services/HandleStatusQRCodeService';

interface MulterRequest extends Request {
  file: Express.MulterS3.File;
}

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
      const { user } = request;
      const {
        originalname: name,
        size,
        key,
        location: url = '',
      } = (request as MulterRequest).file;
      const urlUpdated =  "http://video.icods-api.com.br/"+key
      const addQRCodeContentService = container.resolve(AddQRCodeContentService)
      const handleStatusQRCodeService = container.resolve(HandleStatusQRCodeService)
      
      const qrcode = await addQRCodeContentService.run(
        qrcode_id,
        name,
        size,
        key,
        urlUpdated,
        user.id,
      );
      setTimeout(() => {
        handleStatusQRCodeService.run(qrcode_id);
      },180000)

      return response.json(qrcode);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }

}
