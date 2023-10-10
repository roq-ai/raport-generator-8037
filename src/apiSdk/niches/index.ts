import queryString from 'query-string';
import { NicheInterface, NicheGetQueryInterface } from 'interfaces/niche';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNiches = async (query?: NicheGetQueryInterface): Promise<PaginatedInterface<NicheInterface>> => {
  return fetcher('/api/niches', {}, query);
};

export const createNiche = async (niche: NicheInterface) => {
  return fetcher('/api/niches', { method: 'POST', body: JSON.stringify(niche) });
};

export const updateNicheById = async (id: string, niche: NicheInterface) => {
  return fetcher(`/api/niches/${id}`, { method: 'PUT', body: JSON.stringify(niche) });
};

export const getNicheById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/niches/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteNicheById = async (id: string) => {
  return fetcher(`/api/niches/${id}`, { method: 'DELETE' });
};
