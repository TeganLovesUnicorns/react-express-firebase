// import dependancies below

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import Page components

import Header from './components/header';
import NavMenu from './components/NavMenu';
import Footer from './components/footer';

// Import Pages

import Home from './components/home';
import About from './components/About';
import Contact from './components/contact';
import Oops from './components/oops';


const App = () => (
  <div>
    <Header />
    <NavMenu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={Oops} />
    </Switch>
    <Footer />

  </div>
);

export default App;
