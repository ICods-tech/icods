import { IColors } from "./IColors";

export interface IFilterQRCodes {
  id: string;
  color: IColors | 'noFilter';
  favorited: boolean;
  month: number | null;
  year: number | null
}
