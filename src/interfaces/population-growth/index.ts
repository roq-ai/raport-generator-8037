import { GetQueryInterface } from 'interfaces';

export interface PopulationGrowthInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PopulationGrowthGetQueryInterface extends GetQueryInterface {
  id?: string;
}
