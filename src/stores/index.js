import CompanyStore from './CompanyStore'
import ClientStore from './ClientStore'


export const storeFactory = {
    companyStore: new CompanyStore(),
    clientStore: new ClientStore(),
};