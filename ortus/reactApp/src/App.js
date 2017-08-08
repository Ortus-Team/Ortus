import React, { Component } from "react";
// import Home from './modules/Home/Home';
/*import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'*/

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World
        {Home}
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
        </Router>
      </div>
    );
  }
}

const Home = <h1>Hello from Home!</h1>