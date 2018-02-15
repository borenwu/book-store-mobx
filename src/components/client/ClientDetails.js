import React from 'react';

class ClientDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.client.company)
    }

    handleUpdate(e){
        let clientId = this.props.client.id
        let client_name = this.refs.client_name.value
        let desc = this.refs.desc.value
        let receivable = this.refs.receivable.value
        const client = {
            client_id:clientId,
            client_name:client_name,
            desc:desc,
            receivable:receivable
        }
        // this.props.update(clientId,client)
    }

    render() {
        return (
            <div className="media">
                <div className="media-body">
                    <li>Company name: <input ref="company_name" placeholder={this.props.client.company}/></li>
                    <li>Client name: <input ref="client_name" placeholder={this.props.client.client_name}/></li>
                    <li>Client desc: <input ref="desc" type="text" placeholder={this.props.client.desc}/></li>
                    <li>Client receivable: <input ref="receivable" type="text" placeholder={this.props.client.receivable}/></li>
                    <button onClick={this.handleUpdate.bind(this)}>UPDATE</button>
                </div>
            </div>
        )
    }
}
// const ClientDetails = ({client}) => {
//     console.log(client)
//
//     return (
//         <div className="media">
//             <div className="media-body">
//
//             </div>
//         </div>
//     );
// };


export default ClientDetails;