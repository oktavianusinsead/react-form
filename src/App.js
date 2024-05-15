// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormComponent from './Form';
import DisplayData from './DisplayData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FormComponent} />
          <Route path="/display" component={DisplayData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
