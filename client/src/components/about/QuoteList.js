// src/components/QuoteList.js
import React from 'react';
import QuoteCard from './QuoteCard';
import "../about/QuoteList.css";

// An array of objects
const quotes = [
    
  {quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Adama aka ',
    image:
      'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.postimg.cc%2FZ5Pygkmb%2Fmonavatars.jpg',
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Amine aka Heimdall',
    image:
      'https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/idris-elba-heimdall-mcu-1483309.jpg?r=1535538139053',
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Audrey aka Gost Rider',
    image:
      'https://pbs.twimg.com/profile_images/1137757586097344512/RDeoRyUr_400x400.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Clément aka Groot',
    image:
      'https://3.bp.blogspot.com/-8bFihAQIM8k/VvMExeASDqI/AAAAAAABYSo/S9lKrn5trU8p0nSrWpgtnCov47Qup1Jyw/s1600/groot.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Félix aka Luke Cage',
    image:
      'https://img.huffingtonpost.com/asset/5c92fcaa240000f7054e03f1.jpeg?ops=scalefit_630_noupscale',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Paul-Arnaud aka Spider Man',
    image:
      'https://i.ytimg.com/vi/jugPJUrCdbM/maxresdefault.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Sébastien aka Ant Man',
    image:
      'https://sm.ign.com/ign_fr/feature/1/11-coolest/11-coolest-ant-man-easter-eggs_5dyf.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Vanessa aka Tornade',
    image:
      'https://i.pinimg.com/originals/49/00/f4/4900f47277e344f7c9a50b0f709dfc40.png',
  },
];

const QuoteList = () => (
  <div className="cards-quotelist">
    {quotes.map(item => (
      <QuoteCard
        key={item.quote}
        quote={item.quote}
        image={item.image}
        character={item.character}
      />
    ))}
  </div>
);

export default QuoteList;