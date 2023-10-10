import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
}
