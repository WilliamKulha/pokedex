import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/title.scss';

const Title = () => (
  <div className="titleContainer">
    <h1>Pumpkin's Pokedex</h1>
    <h3>Powered by POKEAPI!</h3>
  </div>
);

export default CSSModules(Title, styles);
