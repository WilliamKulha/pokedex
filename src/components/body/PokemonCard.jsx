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
  <div className="physicals">
    <p>Weight: {Math.round(pokemon.weight * .22)} lbs</p>
    <p>Height: {Math.round(pokemon.height * 4)} in.</p>        
  </div>
  <div className="types">
    <h3>Types</h3>
    <p>
    {pokemon.types.map(type => type.name + ' ')}          
    </p>
  </div>       
</div>
)

export default CSSModules(PokemonCard, styles);
