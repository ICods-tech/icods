import { container } from 'tsyringe';
import { Request, Response } from 'express';
import GetUserQRCodeService from '@modules/QRCodes/services/GetUserQRCodeService';
import GetUserQRCodesService from '@modules/Users/services/user/GetUserQRCodesService';
import AddQRCodeContentService from '@modules/QRCodes/services/AddQRCodeContentService';

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
      const {
        originalname: name,
        size,
        key,
        location: url = '',
      } = (request as MulterRequest).file;
      url.replace("icods-studio","studio-icods") // replace url para novo bucket convertido
      const addQRCodeContentService = container.resolve(AddQRCodeContentService)
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

}
