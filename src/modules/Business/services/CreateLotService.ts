// import Client from '@modules/Business/typeorm/models/clients'
// import AppError from 'src/infra/error/AppError'
// import { inject, injectable } from 'tsyringe'
// import IBusinessRepository from '../interfaces/IBusinessRepository'
// import IClient from '../interfaces/IClient'
// import IClientsRepository from '../interfaces/IClientsRepository'

// @injectable()
// export default class CreateClientService {

//   constructor(
//     @inject('ClientsRepository')
//     private clientsRepository: IClientsRepository,

//     @inject('QRCodeRepository')
//     private qrcodeRepository: IQRCodesRepository,
//   ) {}

//   public async run(clientId: string, {name, email, phone}: IClient): Promise<{ client: Client }> {
//     // const business = await this.businessRepository.findById(businessId)

//     // if (!business) {
//     //   throw new AppError('Business not found')
//     // }

//     // const client = await this.clientsRepository.createClient({
//     //   name,
//     //   email,
//     //   phone,
//     //   business
//     // })

//     // return { client }
//     return
//   }
// }
