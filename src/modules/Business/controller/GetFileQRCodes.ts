import GetUserQRCodeService from "../../QRCodes/services/GetUserQRCodeService";
import QRCode from "../../QRCodes/typeorm/models/QRCode";
import { Request, Response } from "express";
import fs from 'fs';
import { container } from "tsyringe";
import GetAllQRCodesLotService from "../services/GetAllQRcodeService";
import GetQRCodeFileService from "../services/GetQRCodeFileService";
const logger = require("../../../infra/middlewares/Logger");

export default class GetQRCodeFileController {

  async run(request : Request, response: Response):Promise<Response> {
    try {
      const { id } = request.params
      const { qrcode } = request.query

      let qrcodes;
      const getQRCodeFileService = container.resolve(GetQRCodeFileService)
      if(qrcode === "true"){
        const getUserQRCodeService= container.resolve(GetUserQRCodeService);
        qrcodes = [await getUserQRCodeService.runBusiness(id)];
      }else{
        const getAllQRCodesLotService = container.resolve(GetAllQRCodesLotService);
        qrcodes = await getAllQRCodesLotService.run(id);
      }

      let { generatedPdf } = await getQRCodeFileService.run(qrcodes);

      let pdf = generatedPdf as any

      const pdfData = fs.readFileSync(pdf.filename, {encoding: 'base64'})
      response.header('Content-Disposition', `attachment; filename="qrcodes.pdf"`);
      response.contentType('application/pdf')
      return response.send(pdfData)
    } catch (err: any) {
      logger.log(err)
      return response.status(400).json(err.message)
    }

  }
}
