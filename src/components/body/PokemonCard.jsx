import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles/pokemon-card.scss';

const PokemonCard = ({poke}) => {

  const {name, height, image, weight} = poke;
  
  return (
    <div className="card-wrapper">
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{weight}</p>
    </div>
  )
};

export default CSSModules(PokemonCard, styles);
