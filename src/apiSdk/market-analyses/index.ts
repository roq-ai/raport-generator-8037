import queryString from 'query-string';
import { MarketAnalysisInterface, MarketAnalysisGetQueryInterface } from 'interfaces/market-analysis';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMarketAnalyses = async (
  query?: MarketAnalysisGetQueryInterface,
): Promise<PaginatedInterface<MarketAnalysisInterface>> => {
  return fetcher('/api/market-analyses', {}, query);
};

export const createMarketAnalysis = async (marketAnalysis: MarketAnalysisInterface) => {
  return fetcher('/api/market-analyses', { method: 'POST', body: JSON.stringify(marketAnalysis) });
};

export const updateMarketAnalysisById = async (id: string, marketAnalysis: MarketAnalysisInterface) => {
  return fetcher(`/api/market-analyses/${id}`, { method: 'PUT', body: JSON.stringify(marketAnalysis) });
};

export const getMarketAnalysisById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/market-analyses/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMarketAnalysisById = async (id: string) => {
  return fetcher(`/api/market-analyses/${id}`, { method: 'DELETE' });
};
