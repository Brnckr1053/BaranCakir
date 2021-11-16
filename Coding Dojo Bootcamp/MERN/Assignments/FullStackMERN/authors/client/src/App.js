import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import MainForm from './views/MainForm';
import Error from './components/Error'


function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to Author Manager</h1>
        <p>
          <Link to="/authors">Home</Link>
        </p>
        
        <Switch>
          <Route exact path="/authors/">
            <Main />
          </Route>
        {/* </Switch>
        <Switch> */}
          <Route exact path="/authors/create">
            <MainForm />
          </Route>
        {/* </Switch>
        <Switch> */}
          <Route exact path="/authors/:id">
            <Detail />
          </Route>
        {/* </Switch>
        <Switch> */}
          <Route exact path="/error">
            <Error />
          </Route>
        {/* </Switch>
        <Switch> */}
          <Route exact path="/authors/edit/:id">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      
    
  );
}
export default App;
