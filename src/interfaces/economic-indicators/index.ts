import { GetQueryInterface } from 'interfaces';

export interface EconomicIndicatorsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EconomicIndicatorsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
