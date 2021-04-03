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
import Showcase from './components/Showcase';
import Features from './components/Features';
import Blog from './components/Blog';
import './css/home.css';
import './css/about.css';
import './css/top-title.css';
import './css/pricing.css';
import './css/team.css';
import './css/showcase.css';
import './css/features.css';
import './css/blog.css';
import 'font-awesome/css/font-awesome.min.css';

function App(props) {
  return (
    <>
      <Home />
      <About />
      <Pricing />
      <Team />
      <Showcase />
      <Features />
      <Blog />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));