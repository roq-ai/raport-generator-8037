import queryString from 'query-string';
import { EconomicIndicatorsInterface, EconomicIndicatorsGetQueryInterface } from 'interfaces/economic-indicators';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEconomicIndicators = async (
  query?: EconomicIndicatorsGetQueryInterface,
): Promise<PaginatedInterface<EconomicIndicatorsInterface>> => {
  return fetcher('/api/economic-indicators', {}, query);
};

export const createEconomicIndicators = async (economicIndicators: EconomicIndicatorsInterface) => {
  return fetcher('/api/economic-indicators', { method: 'POST', body: JSON.stringify(economicIndicators) });
};

export const updateEconomicIndicatorsById = async (id: string, economicIndicators: EconomicIndicatorsInterface) => {
  return fetcher(`/api/economic-indicators/${id}`, { method: 'PUT', body: JSON.stringify(economicIndicators) });
};

export const getEconomicIndicatorsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/economic-indicators/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEconomicIndicatorsById = async (id: string) => {
  return fetcher(`/api/economic-indicators/${id}`, { method: 'DELETE' });
};
