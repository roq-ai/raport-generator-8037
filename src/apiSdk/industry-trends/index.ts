import queryString from 'query-string';
import { IndustryTrendsInterface, IndustryTrendsGetQueryInterface } from 'interfaces/industry-trends';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getIndustryTrends = async (
  query?: IndustryTrendsGetQueryInterface,
): Promise<PaginatedInterface<IndustryTrendsInterface>> => {
  return fetcher('/api/industry-trends', {}, query);
};

export const createIndustryTrends = async (industryTrends: IndustryTrendsInterface) => {
  return fetcher('/api/industry-trends', { method: 'POST', body: JSON.stringify(industryTrends) });
};

export const updateIndustryTrendsById = async (id: string, industryTrends: IndustryTrendsInterface) => {
  return fetcher(`/api/industry-trends/${id}`, { method: 'PUT', body: JSON.stringify(industryTrends) });
};

export const getIndustryTrendsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/industry-trends/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteIndustryTrendsById = async (id: string) => {
  return fetcher(`/api/industry-trends/${id}`, { method: 'DELETE' });
};
