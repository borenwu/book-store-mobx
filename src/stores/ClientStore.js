import {observable, action, computed, useStrict} from 'mobx';
import Axios from 'axios'
import {rootUrl} from '../configs/ipConfig'

const clientUrl = `${rootUrl}/client`;
const clientsUrl = `${rootUrl}/clients`;


export default class ClientStore {

    @observable clients = []
    @observable clientById = {}

    @action createClient(client) {
        Axios.post(clientUrl, client)
            .then(response => {
                this.clients.push(response.data)
            })
            .catch(error => {
                throw(error);
            });
    }

    @action fetchClients(company) {
        Axios.post(clientsUrl, company)
            .then(response => {
                this.clients = response.data
            })
            .catch(error => {
                throw(error);
            });
    }
}