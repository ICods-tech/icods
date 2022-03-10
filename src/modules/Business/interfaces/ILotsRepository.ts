import QRCode from "@modules/QRCodes/typeorm/models/QRCode"
import Clients from "../typeorm/models/clients"
import Lots from "../typeorm/models/lots"
import ILots from "./ILots"

export default interface ILotsRepository {
  findById(id: string): Promise<Lots | undefined>
  findAllByBusiness(businessId: string): Promise<Lots[] | undefined>
  createLot(client: Clients, qrcodes: QRCode[]): Promise<Lots>
  updateLot(data: ILots): Promise<ILots>
}
