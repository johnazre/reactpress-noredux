import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path='/' component={Home} />
          </div>
        </Router>
    );
  }
}

export default App;
