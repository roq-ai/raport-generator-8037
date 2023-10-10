import { GetQueryInterface } from 'interfaces';

export interface MarketAnalysisInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MarketAnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
}
