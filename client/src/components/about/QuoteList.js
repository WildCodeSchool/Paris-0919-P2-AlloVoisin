import React from 'react';
import QuoteCard from './QuoteCard';

const quotes = [
    
  {quote:
      "Combatre avec perceverance et courage, car rien n'est facile alors il se avec motivation et perceverance",
      character: 'Adama aka Kitty Pride',
    image:
      'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/10/X-Men-Kitty-Pryde-Mutant-Leader.jpg',
  },
  {
    quote: "I see you...",
    character: 'Amine aka Heimdall !',
    image:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Heimdall-Death-in-Marvel-Comic.jpg',
  },
  {
    quote: "Rrrrrr ! ",
    character: 'Audrey aka Black Panther',
    image:
      'https://www.actualitte.com/images/actualites/images/comics/black%20panther%20comics%20premier%20dessin%20jack%20kirby.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Clement aka Groot',
    image:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/02/Groot-Punk-Mohawk-Guardians-Galaxy-Comic.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Felix aka Luke Cage',
    image:
      'https://media.comicbook.com/2019/07/weapon-plus-venom-luke-cage-wolverine-captain-america-1178126-1280x0.jpeg',
  },
  {
    quote:
      "🕸Web designer🕸",
    character: 'Paul-Arnaud aka Spider Man',
    image:
      'https://blog.comic-con-paris.com/wp-content/uploads/2019/08/spiderman-marvel-comics-min.jpg',
  },
  {
    quote:
      "Un grand pouvoir entraine de grandes irresponsabilites",
    character: 'Sebastien aka Dead Pool',
    image:
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Deadpool-Liefeld-Comic-Cover.jpg',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    character: 'Vanessa aka Tornade',
    image:
      'https://image.noelshack.com/fichiers/2019/46/4/1573719611-tornade.jpg',
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