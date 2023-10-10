import queryString from 'query-string';
import { BusinessStatisticsInterface, BusinessStatisticsGetQueryInterface } from 'interfaces/business-statistics';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessStatistics = async (
  query?: BusinessStatisticsGetQueryInterface,
): Promise<PaginatedInterface<BusinessStatisticsInterface>> => {
  return fetcher('/api/business-statistics', {}, query);
};

export const createBusinessStatistics = async (businessStatistics: BusinessStatisticsInterface) => {
  return fetcher('/api/business-statistics', { method: 'POST', body: JSON.stringify(businessStatistics) });
};

export const updateBusinessStatisticsById = async (id: string, businessStatistics: BusinessStatisticsInterface) => {
  return fetcher(`/api/business-statistics/${id}`, { method: 'PUT', body: JSON.stringify(businessStatistics) });
};

export const getBusinessStatisticsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/business-statistics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBusinessStatisticsById = async (id: string) => {
  return fetcher(`/api/business-statistics/${id}`, { method: 'DELETE' });
};
