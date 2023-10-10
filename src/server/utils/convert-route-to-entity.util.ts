const mapping: Record<string, string> = {
  'business-environments': 'business_environment',
  'business-statistics': 'business_statistics',
  companies: 'company',
  demographics: 'demographics',
  'economic-indicators': 'economic_indicators',
  'industry-trends': 'industry_trends',
  'market-analyses': 'market_analysis',
  niches: 'niche',
  'population-growths': 'population_growth',
  regions: 'region',
  reports: 'report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
