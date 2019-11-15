import React from 'react';
import NavBar from '../common/NavBar';
import QuoteList from './QuoteList';
import SocialNetwork from '../common/SocialNetwork';
import "./QuoteList.css";
import "./About.css";

const About = () => {
  return (
      
    <div className="about">
      <NavBar />
      <SocialNetwork />
      <h1 className="title-card">Iron Company</h1>
      <QuoteList />
    </div>
    
  );
}
export default About;
