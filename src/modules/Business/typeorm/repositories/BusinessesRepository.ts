import IBusiness from '@modules/Business/interfaces/IBusiness';
import IBusinessRepository from '@modules/Business/interfaces/IBusinessRepository';
import { getRepository, Repository } from 'typeorm';
import Business from '../models/business';
import Client from '../models/clients';

export default class BusinessRepository implements IBusinessRepository {
  private ormRepository: Repository<Business>;

  constructor() {
    this.ormRepository = getRepository('businesses');
  }

  public async findById(id: string): Promise<Business | undefined> {
    const business = await this.ormRepository.findOne(id);

    return business || undefined;
  }

  public async findByEmail(email: string): Promise<Business | undefined> {
    const business = await this.ormRepository.findOne({ where: { email } });

    return business || undefined;
  }

  public async deleteBusiness(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async createBusiness(data: IBusiness): Promise<Business> {
    const business = this.ormRepository.create(data);
    await this.ormRepository.save(business);

    return business;
  }

  public async getAllBusinessClients(id: string): Promise<Client[] | undefined> {
    const business = await this.ormRepository.findOne(id, {
      relations: ['clients'],
    });

    return business!.clients;
  }

  public async save(business: Business): Promise<Business> {
    return await this.ormRepository.save(business);
  }
}
