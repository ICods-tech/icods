import Client from "../typeorm/models/clients"
import IClients from "./IClients"

export default interface IClientsRepository {
  findByName(name: string):Promise<Client | undefined>
  findById(id: string): Promise<Client | undefined>
  findByEmail(email: string): Promise<Client | undefined>
  createClient(data: IClients): Promise<Client>
  update(data: IClients): Promise<IClients>
  delete(id: string): Promise<void>
}
