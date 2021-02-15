import React from 'react';
import './App.css';
import Contact from './Contact';
import Content from "./Content";
import Navbar from './Navbar';
import Home from './Home';
import View from "./View";
import Reviews from "./Reviews";
import {BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/Blogs" component = { Content } />
        <Route exact path="/Reviews" component = {Reviews} />
        <Route exact path="/Contact" component = { Contact } />
        <Route exact path="/View" component = { View } />
        <Redirect to = "/" />
      </Switch>
    </div>
  );
}

export default App;
