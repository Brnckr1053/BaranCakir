// import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets';




function App() {




  return (
    
    <BrowserRouter>
      <div className="App">
        <Search/>
        <Switch>
          <Route path="/people/:id?/">
            <People/>
          </Route>
        
          <Route path="/planets/:id?/">
            <Planets/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
      
  );
}

export default App;
