import IBusiness from './IBusiness'
import Business from '@modules/Business/typeorm/models/business'
import Client from '@modules/Business/typeorm/models/clients'

export default interface IBusinessRepository {
  findById(id: string): Promise<Business | undefined>
  findByEmail(email: string): Promise<Business | undefined>
  deleteBusiness(id: string): Promise<void>
  createBusiness(data: IBusiness): Promise<Business>
  save(data: IBusiness): Promise<IBusiness>
}
