import { GetQueryInterface } from 'interfaces';

export interface NicheInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NicheGetQueryInterface extends GetQueryInterface {
  id?: string;
}
