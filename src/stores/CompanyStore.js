import {observable, action, computed, useStrict} from 'mobx';
import Axios from 'axios'
import * as ipConfig from '../configs/ipConfig'

const apiUrl = `${ipConfig.rootUrl}/company`;

export default class CompanyStore {

    @observable companies = []

    @action createCompany(company) {
        Axios.post(apiUrl, company)
            .then(response => {
                this.companies.push(response.data)
            })
            .catch(error => {
                throw(error);
            });
    }

    @action fetchCompanies() {
        Axios.get(apiUrl)
            .then(response => {
                this.companies = response.data
            })
            .catch(error => {
                throw(error);
            })
    }
}