import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/main.css'

import Home from './pages/home/Home';
import About from './pages/about/About';
import Welcome from './pages/welcome/Welcome';
import Operations from './pages/operations/Operations';
import Contact from './pages/contact/Contact'
import Detills from './pages/operations/Detills';
import Member from './pages/about/Member';
import Change from './pages/Change';
import Estetica from './pages/operations/Estetica';
import Instalaciones from './pages/Instalaciones/Instalaciones'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/:leng/home" exact component={Home} />
                <Route path="/:leng/changeLenguage" exact component={Change} />
                <Route path="/:leng/team" exact component={About} />
                <Route path="/:leng/treatments" exact component={Operations} />
                <Route path="/:leng/estetic" exact component={Estetica} />
                <Route path="/:leng/instalations" exact component={Instalaciones} />
                <Route path="/:leng/contact" exact component={Contact} />
                <Route path="/:leng/treatments/:operation" exact component={Detills} />
                <Route path="/:leng/team/:member" exact component={Member} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
