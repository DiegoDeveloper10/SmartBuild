import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { FetchData } from './components/FetchData';
import { Usuario } from './components/Usuario/Usuario';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>

                <Route exact path='/' component={Home} />
                <Route path='/usuario' component={Usuario} />
                <Route path='/fetchdata' component={FetchData} />
            </Layout>
        );
    }
}
