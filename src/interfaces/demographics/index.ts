import { GetQueryInterface } from 'interfaces';

export interface DemographicsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DemographicsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
