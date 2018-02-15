import React from 'react'
import {observer} from 'mobx-react';

@observer
export default class ClientDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log(this.props.route.params.id)
        this.props.store.fetchClientById(this.props.route.params.id);
    }

    handleUpdate(e) {
        let clientId = this.props.store.clientById.id
        let client_name = this.refs.client_name.value
        let desc = this.refs.desc.value
        let receivable = this.refs.receivable.value
        const client = {
            client_id: clientId,
            client_name: client_name,
            desc: desc,
            receivable: receivable
        }
        this.props.store.updateClientById(clientId,client)
    }

    render() {
        return (
            <div>
                <h1>Client Details Page</h1>
                <p>{this.props.route.params.id}</p>

                <div className="media">
                    <div className="media-body">
                        <li>{this.props.store.clientById.company_name}</li>
                        <li>Client name: <input ref="client_name"
                                                placeholder={this.props.store.clientById.client_name}/></li>
                        <li>Client desc: <input ref="desc" type="text" placeholder={this.props.store.clientById.desc}/>
                        </li>
                        <li>Client receivable: <input ref="receivable" type="text"
                                                      placeholder={this.props.store.clientById.receivable}/></li>
                        <button onClick={this.handleUpdate.bind(this)}>UPDATE</button>
                    </div>
                </div>
            </div>
        );
    }
}

