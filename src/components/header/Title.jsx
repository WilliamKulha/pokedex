import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/title.scss';

const Title = () => (
  <div className="title-container">
    <h1>Pumpkie-kun's Pokedex</h1>
    <h3>Powered by POKEAPI!</h3>
  </div>
);

export default CSSModules(Title, styles);
