import React from 'react'
import ClientDetails from './ClientDetails'


export default class ClientDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // this.props.fetchClientById(this.props.params.id);
    }

    // addToCart(book){
    //     const item = {
    //         title: book.title,
    //         price: book.price
    //     };
    //     this.props.addToCart(item);
    // }

    render() {
        return (
            <div>
                <h1>Client Details Page</h1>
                <ClientDetails />
            </div>
        );
    }
}

