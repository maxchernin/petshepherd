import { Route, Switch, Link } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import Dog from "./components/Dog";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
  <div className="ui fixed inverted menu">
    <div className="ui container">
      <Link to="/" className="header item"> 
        <img className="logo" src="assets/images/logo.png" alt=""/>
        FluffChain
      </Link>
      <Link to="/" className="item">Pet Search</Link>
      <Link to="/addPet" className="item">Register a Pet</Link>
      <div className="ui simple dropdown item">
        Dropdown <i className="dropdown icon"></i>
        <div className="menu">
          <a className="item" href="">Link Item</a>
          <a className="item" href="">Link Item</a>
          <div className="divider"></div>
          <div className="header">Header Item</div>
          <div className="item">
            <i className="dropdown icon"></i>
            Sub Menu
            <div className="menu">
              <a className="item" href="">Link Item</a>
              <a className="item" href="">Link Item</a>
            </div>
          </div>
          <a className="item" href="">Link Item</a>
        </div>
      </div>
    </div>
  </div>

        </header>
            <Switch>
              <Route exact path="/" component={SearchPage}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route path="/dog/:chipId" component={Dog}></Route>
              <Route component={NotFound}/>
            </Switch>
      </div>
    );
  }
}

export default App;
