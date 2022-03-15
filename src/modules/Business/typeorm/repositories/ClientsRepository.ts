import IClients from '@modules/Business/interfaces/IClients';
import IClientsRepository from '@modules/Business/interfaces/IClientsRepository';
import { getRepository, Repository } from 'typeorm';
import { default as Client, default as Clients } from '../models/clients';

export default class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Clients>;

  constructor() {
    this.ormRepository = getRepository('clients');
  }
  async findByName(name: string): Promise<Client | undefined> {
    return await this.ormRepository.findOne({ where: { name } });
  }
  async update(client: IClients): Promise<IClients> {
    return await this.ormRepository.save(client);
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);

    return client || undefined;
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({ where: { email } });

    return client || undefined;
  }

  public async createClient(data: IClients): Promise<Client> {
    const client = this.ormRepository.create(data);
    await this.ormRepository.save(client);

    return client;
  }
}
