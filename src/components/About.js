// import dependancies below

import React from 'react';
import { Link, Route } from 'react-router-dom';

// import components below

const About = () => (
  <div>
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Route exact path="/" />
    </div>
  </div>
);

export default About;
