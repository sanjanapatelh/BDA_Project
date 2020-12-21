import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import Find from './Find';
import Graph from './Graph';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
        <h1 className="App-title">Analysis Of Malicious And Benign Urls</h1>
          <img src={`${process.env.PUBLIC_URL}/images/m2.jpeg`} className="App-logo" alt="logo" />


        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
                 <Route exact path='/find' component={Find} />
                 <Route exact path='/graph' component={Graph} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
