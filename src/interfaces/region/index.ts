import { GetQueryInterface } from 'interfaces';

export interface RegionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RegionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
