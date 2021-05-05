import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Launches} from './pages/Launches';
import {Succeeded} from './pages/Succeeded';
import {Upcoming} from './pages/Upcoming';
import {Failed} from './pages/Failed';
import {Support} from './pages/Support';
import {Home} from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/launches' exact component={Launches} />
          <Route path='/succeeded' component={Succeeded} />
          <Route path='/failed' component={Failed} />
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/support' component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;