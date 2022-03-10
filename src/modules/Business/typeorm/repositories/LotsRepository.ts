import ILots from '@modules/Business/interfaces/ILots';
import ILotsRepository from '@modules/Business/interfaces/ILotsRepository';
import { default as Lot, default as Lots } from '@modules/Business/typeorm/models/lots';
import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import { getRepository, Repository } from 'typeorm';
import { default as Client } from '../models/clients';

export default class LotsRepository implements ILotsRepository {
  private ormRepository: Repository<Lot>;

  constructor() {
    this.ormRepository = getRepository('lots');
  }

  public async findById(id: string): Promise<Lot | undefined> {
    const lot = await this.ormRepository.findOne(id);

    return lot || undefined;
  }

  public async findAllByBusiness(businessId: string): Promise<Lot[] | undefined> {
    const lots = await this.ormRepository.find({
      where: {
        businessId,
      }
    })

    return lots || undefined;
  }

  public async createLot(client: Client, qrcodes: QRCode[]): Promise<Lots> {
    const lot = this.ormRepository.create({ client, qrcodes });
    await this.ormRepository.save(lot);

    return lot;
  }

  public async updateLot(lot: ILots): Promise<ILots> {
    await this.ormRepository.save(lot);

    return lot;
  }
}
