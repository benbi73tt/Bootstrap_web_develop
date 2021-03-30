import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/NaviBar';
import Footer from './Components/footer';

import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home} from './Home';
import {Users} from './users';
import {About} from './About';


function App() {
  return (
    <>
    <Router>   
    <NaviBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={Users}/>
        <Route path='/about' component={About}/>
      </Switch>
    </Router>


    <Footer/>

    </>
  );
}

export default App;
