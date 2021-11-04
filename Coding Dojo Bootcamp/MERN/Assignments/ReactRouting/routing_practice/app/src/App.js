import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Page from './components/Pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>

          <Route path="/:input/:colors?/:backgroundColors?" >
            <Page/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;