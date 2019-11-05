import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const About = () => {
  return (
      <Router>
    <div className="About">
      <Navbar />
      
      <SocialNetwork />
      <QuoteList />
    </div>
    </Router>
  );
}
export default About;
