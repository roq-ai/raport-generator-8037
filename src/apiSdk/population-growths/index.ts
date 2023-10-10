import queryString from 'query-string';
import { PopulationGrowthInterface, PopulationGrowthGetQueryInterface } from 'interfaces/population-growth';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPopulationGrowths = async (
  query?: PopulationGrowthGetQueryInterface,
): Promise<PaginatedInterface<PopulationGrowthInterface>> => {
  return fetcher('/api/population-growths', {}, query);
};

export const createPopulationGrowth = async (populationGrowth: PopulationGrowthInterface) => {
  return fetcher('/api/population-growths', { method: 'POST', body: JSON.stringify(populationGrowth) });
};

export const updatePopulationGrowthById = async (id: string, populationGrowth: PopulationGrowthInterface) => {
  return fetcher(`/api/population-growths/${id}`, { method: 'PUT', body: JSON.stringify(populationGrowth) });
};

export const getPopulationGrowthById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/population-growths/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePopulationGrowthById = async (id: string) => {
  return fetcher(`/api/population-growths/${id}`, { method: 'DELETE' });
};
