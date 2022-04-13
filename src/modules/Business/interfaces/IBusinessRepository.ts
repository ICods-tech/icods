import IBusiness from './IBusiness'
import Business from '../typeorm/models/business'
import Clients from '../typeorm/models/clients'

export default interface IBusinessRepository {
  findById(id: string): Promise<Business | undefined>
  findByEmail(email: string): Promise<Business | undefined>
  getAllBusinessClients(id: string): Promise<Clients[] | undefined>
  deleteBusiness(id: string): Promise<void>
  createBusiness(data: IBusiness): Promise<Business>
  save(data: IBusiness): Promise<IBusiness>
}
