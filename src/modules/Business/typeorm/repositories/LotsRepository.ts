import { getRepository, Repository } from 'typeorm';
import QRCode from '../../../QRCodes/typeorm/models/QRCode';
import ILotsRepository from '../../interfaces/ILotsRepository';
import { default as Lot, default as Lots } from '../../typeorm/models/lots';
import { default as Client } from '../models/clients';

export default class LotsRepository implements ILotsRepository {
  private ormRepository: Repository<Lot>;

  constructor() {
    this.ormRepository = getRepository('lots');
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findByClientId(id: string): Promise<Lot[] | []> {
    const lots = await this.ormRepository.find({
      where: {
        client: id,
      },
    });
    return lots || [];
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

  public async create(client: Client): Promise<Lots> {
    const lot = this.ormRepository.create({ client });
    await this.ormRepository.save(lot);
    return lot;
  }

  public async getAllQRCodesByLot(lotId: string): Promise<QRCode[] | undefined> {
    const lot = await this.ormRepository.findOne(lotId, {
      relations: ['qrcodes'],
    });
    return lot!.qrcodes;
  }

  public async update(lot: Lot): Promise<Lots | undefined> {
    if(lot.numberOfQRCodes === 0) {
      await this.delete(lot.id);
      return;
    }

    return await this.ormRepository.save(lot);
  }
}
