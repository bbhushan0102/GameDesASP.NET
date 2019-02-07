import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchGame } from './components/FetchGame';
import { AddGame } from './components/AddGame';



export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/fetchgame' component={FetchGame} />
    <Route path='/addgame' component={AddGame} />
    <Route path='/game/edit/:empid' component={FetchGame} />
</Layout>;
