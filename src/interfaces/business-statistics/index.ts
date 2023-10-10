import { GetQueryInterface } from 'interfaces';

export interface BusinessStatisticsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BusinessStatisticsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
