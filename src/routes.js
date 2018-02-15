import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Company from './components/company/CompanyPage'
import Client from './components/client/ClientPage'
import ClientDetailsPage from './components/client/ClientDetailsPage'
import App from './components/App'

import {storeFactory} from './stores'

import ClientStore from './stores/ClientStore'
const clientStore = new ClientStore()


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/about" component={About}></Route>
        {/*<Route path="/books" component={Book}></Route>*/}
        {/*<Route path="/company" component={Company}></Route>*/}
        <Route path="/company" component={() => <Company store={storeFactory.companyStore}/>}></Route>
        <Route path="/clients" component={() => <Client store={clientStore}/>}></Route>
        <Route path="/clients/:id" component={(route) => <ClientDetailsPage store={clientStore} route={route}/>}></Route>
    </Route>
);