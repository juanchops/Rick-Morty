import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Episodios from './components/Episodios';
import Doc from './components/Doc';
import Inicio from './components/Inicio';


function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/episodios" component={Episodios} />
        <Route exact path="/doc" component={Doc} />
      </Switch>
    </Router>
  );
}

export default App;
