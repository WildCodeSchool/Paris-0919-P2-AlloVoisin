import React from 'react';
import NavBar from '../common/NavBar';
import QuoteList from './QuoteList';
import SocialNetwork from '../common/SocialNetwork';

const About = () => {
  return (
      
    <div className="About">
      <NavBar />
      <SocialNetwork />
      <QuoteList />
    </div>
    
  );
}
export default About;
