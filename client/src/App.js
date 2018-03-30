import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleCard from "./components/TitleCard/TitleCard";
import Home from "./components/Home/Home";
import SavedArticles from './components/SavedArticles/SavedArticles';

const App = () => (
  <Router>
    <MuiThemeProvider>
    <div className="App">
    <header>
      <TitleCard />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={SavedArticles} />
      </Switch>
    </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
