import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/main.css'
import Home from './pages/Home';

const Router = () => 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>

export default Router;
