import queryString from 'query-string';
import { BusinessEnvironmentInterface, BusinessEnvironmentGetQueryInterface } from 'interfaces/business-environment';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessEnvironments = async (
  query?: BusinessEnvironmentGetQueryInterface,
): Promise<PaginatedInterface<BusinessEnvironmentInterface>> => {
  return fetcher('/api/business-environments', {}, query);
};

export const createBusinessEnvironment = async (businessEnvironment: BusinessEnvironmentInterface) => {
  return fetcher('/api/business-environments', { method: 'POST', body: JSON.stringify(businessEnvironment) });
};

export const updateBusinessEnvironmentById = async (id: string, businessEnvironment: BusinessEnvironmentInterface) => {
  return fetcher(`/api/business-environments/${id}`, { method: 'PUT', body: JSON.stringify(businessEnvironment) });
};

export const getBusinessEnvironmentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/business-environments/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBusinessEnvironmentById = async (id: string) => {
  return fetcher(`/api/business-environments/${id}`, { method: 'DELETE' });
};
