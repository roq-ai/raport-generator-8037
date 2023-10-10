import queryString from 'query-string';
import { RegionInterface, RegionGetQueryInterface } from 'interfaces/region';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRegions = async (query?: RegionGetQueryInterface): Promise<PaginatedInterface<RegionInterface>> => {
  return fetcher('/api/regions', {}, query);
};

export const createRegion = async (region: RegionInterface) => {
  return fetcher('/api/regions', { method: 'POST', body: JSON.stringify(region) });
};

export const updateRegionById = async (id: string, region: RegionInterface) => {
  return fetcher(`/api/regions/${id}`, { method: 'PUT', body: JSON.stringify(region) });
};

export const getRegionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/regions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRegionById = async (id: string) => {
  return fetcher(`/api/regions/${id}`, { method: 'DELETE' });
};
