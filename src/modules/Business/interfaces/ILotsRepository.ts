import QRCode from "../../QRCodes/typeorm/models/QRCode"
import Clients from "../typeorm/models/clients"
import Lots from "../typeorm/models/lots"

export default interface ILotsRepository {
  findById(id: string): Promise<Lots | undefined>
  delete(id: string): Promise<void>
  findByClientId(id: string): Promise<Lots[] | undefined>
  getAllQRCodesByLot(id: string): Promise<QRCode[] | undefined>
  findAllByBusiness(businessId: string): Promise<Lots[] | undefined>
  create(client: Clients): Promise<Lots>
  update(lot: Lots): Promise<Lots | undefined>
}
