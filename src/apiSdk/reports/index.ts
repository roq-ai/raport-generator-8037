import queryString from 'query-string';
import { ReportInterface, ReportGetQueryInterface } from 'interfaces/report';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getReports = async (query?: ReportGetQueryInterface): Promise<PaginatedInterface<ReportInterface>> => {
  return fetcher('/api/reports', {}, query);
};

export const createReport = async (report: ReportInterface) => {
  return fetcher('/api/reports', { method: 'POST', body: JSON.stringify(report) });
};

export const updateReportById = async (id: string, report: ReportInterface) => {
  return fetcher(`/api/reports/${id}`, { method: 'PUT', body: JSON.stringify(report) });
};

export const getReportById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/reports/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteReportById = async (id: string) => {
  return fetcher(`/api/reports/${id}`, { method: 'DELETE' });
};
