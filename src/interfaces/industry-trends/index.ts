import { GetQueryInterface } from 'interfaces';

export interface IndustryTrendsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface IndustryTrendsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
