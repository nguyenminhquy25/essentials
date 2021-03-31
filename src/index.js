import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Team from './components/Team';
import ShowCase from './components/ShowCase';
import Features from './components/Features';
import './css/home.css';
import './css/about.css';
import './css/top-title.css';
import './css/pricing.css';
import './css/team.css';
import './css/showcase.css';
import './css/features.css';
import 'font-awesome/css/font-awesome.min.css';


function App(props) {
  return (
    <>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/team">Team</Link>
          <Link to="/showcase">Showcase</Link>
          <Link to="/features">Features</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/pricing" exact>
              <Pricing />
            </Route>
            <Route path="/team" exact>
              <Team />
            </Route>
            <Route path="/showcase" exact>
              <ShowCase />
            </Route>
            <Route path="/features" exact>
              <Features />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));