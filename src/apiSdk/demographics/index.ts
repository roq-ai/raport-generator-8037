import queryString from 'query-string';
import { DemographicsInterface, DemographicsGetQueryInterface } from 'interfaces/demographics';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDemographics = async (
  query?: DemographicsGetQueryInterface,
): Promise<PaginatedInterface<DemographicsInterface>> => {
  return fetcher('/api/demographics', {}, query);
};

export const createDemographics = async (demographics: DemographicsInterface) => {
  return fetcher('/api/demographics', { method: 'POST', body: JSON.stringify(demographics) });
};

export const updateDemographicsById = async (id: string, demographics: DemographicsInterface) => {
  return fetcher(`/api/demographics/${id}`, { method: 'PUT', body: JSON.stringify(demographics) });
};

export const getDemographicsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/demographics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDemographicsById = async (id: string) => {
  return fetcher(`/api/demographics/${id}`, { method: 'DELETE' });
};
