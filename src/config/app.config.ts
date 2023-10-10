interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Business Analyst'],
  tenantName: 'Company',
  applicationName: 'Raport generator',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company information',
    'Manage business statistics',
    'Manage market analysis',
    'Manage business environment',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7d8c7a3b-1268-4a9e-85f9-082b89b506db',
};
