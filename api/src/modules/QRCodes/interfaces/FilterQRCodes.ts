import { Colors } from "./Colors";

export interface FilterQRCodes {
  id: string;
  color: Colors | 'noFilter';
  favorited: boolean;
  month: number | null;
  year: number | null
}