import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles/pokemon-card.scss';

const PokemonCard = (props) => (
  <div className="card-wrapper">
    <h3>{props.name}</h3>
  </div>
);

export default CSSModules(PokemonCard, styles);
