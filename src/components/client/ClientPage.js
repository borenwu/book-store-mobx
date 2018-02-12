import React from 'react'
import { Link } from 'react-router';
import {companyInfo} from '../../configs/companyConfig'
import {observer} from 'mobx-react';

@observer
export default class ClientPage extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        let company = companyInfo
        this.props.store.fetchClients(company);
    }


    submitClient(e){
        e.preventDefault()
        let company_name = this.refs.company_name.value
        let client_name = this.refs.client_name.value
        const client = {
            company_name:company_name,
            client_name:client_name
        }
        this.props.store.createClient(client);
    }

    render(){
        return(
            <div>
                <h3>Clients</h3>
                <ul>
                   {this.props.store.clients.map((c,i)=>  <li key={i}><Link  to={`/clients/${c.id}`}>View {c.client_name}</Link></li>)}
                </ul>

                <div>
                    <h3>Clients Form</h3>
                    <form onSubmit={this.submitClient.bind(this)}>
                        <label htmlFor="">company-name</label>
                        <input type="text" name="company_name" ref='company_name'/>
                        <label htmlFor="">client-name</label>
                        <input type="text" name="client_name" ref='client_name'/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

