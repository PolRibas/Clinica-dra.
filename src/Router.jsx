import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/main.css'
import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
import Clinica from './pages/Clinica';
import Contacto from './pages/Contacto';

const Router = () => 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contacto" exact component={Contacto} />
                <Route path="/clinica" exact component={Clinica} />
                <Route path="/tratamientos" exact component={Tratamientos} />
            </Switch>
        </BrowserRouter>

export default Router;
