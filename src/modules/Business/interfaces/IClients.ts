import Business from '../typeorm/models/business';

export default interface IClients {
  business: Business;
  name: string;
  email: string;
  phone: string;
}
