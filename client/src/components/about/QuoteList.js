// src/components/QuoteList.js
import React from 'react';
import QuoteCard from './QuoteCard';

// An array of objects
const quotes = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Adama aka ',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Amine aka',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
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
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Sébastien aka ',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460',
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
  <div>
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