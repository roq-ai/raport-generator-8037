import { GetQueryInterface } from 'interfaces';

export interface BusinessEnvironmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BusinessEnvironmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
