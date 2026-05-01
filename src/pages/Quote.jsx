import React from 'react';
import '../styles/Quote.css';

/**
 * Quotes data array
 * Collection of inspirational food-related quotes
 */
const quotes = [
  {
    text: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    author: "Adam Scott"
  },
  {
    text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    author: "Adelle Davis"
  },
  {
    text: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    author: "Adelle Davis"
  },
  {
    text: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
    author: "Albert Einstein"
  },
  {
    text: "Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.",
    author: "Guy Fieri"
  },
  {
    text: "Food is symbolic of love when words are inadequate.",
    author: "Alan D. Wolfelt"
  },
  {
    text: "There is no love sincerer than the love of food.",
    author: "George Bernard Shaw"
  },
  {
    text: "First we eat, then we do everything else.",
    author: "M.F.K. Fisher"
  },
  {
    text: "One cannot think well, love well, sleep well, if one has not dined well.",
    author: "Virginia Woolf"
  },
  {
    text: "People who love to eat are always the best people.",
    author: "Julia Child"
  },
  {
    text: "Food is our common ground, a universal experience.",
    author: "James Beard"
  },
  {
    text: "The only time to eat diet food is while you're waiting for the steak to cook.",
    author: "Julia Child"
  }
];

/**
 * Quote Page Component
 * Displays a collection of food-related quotes in card format
 */
const Quote = () => {
  return (
    <div className="quote-page">
      <div className="container">
        <div className="quotes-container">
          {quotes.map((quote, index) => (
            <div className="quote-card" key={index}>
              <p className="quote-text">{quote.text}</p>
              <p className="quote-author">{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quote;
