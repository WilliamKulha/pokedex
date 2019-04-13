import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles/pokemon-card.scss';

const PokemonCard = ({pokemon}) => (
<div className="card-wrapper">
  <div className="card-header">
    <h3>{pokemon.name}</h3>
    <h3>{pokemon.number}</h3>
  </div>
  <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
  <div className="types">
    {
      pokemon.types.map(type => 
        <p className={type.type.name}>{type.type.name.toUpperCase()}</p>
      )
    }
  </div>       
</div>
)

export default CSSModules(PokemonCard, styles);
