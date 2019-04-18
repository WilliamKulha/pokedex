import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles/pokemon-card.scss';

const PokemonCard = (props) => (
<div className="card-wrapper" onClick={() => props.onClick(props.id)}>
  <div className="card-header">
    <h3>{props.pokemon.name}</h3>
    <h3>{props.pokemon.number}</h3>
  </div>
  <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
  <div className="types">
    {
      props.pokemon.types.map(type => 
        <p className={type.type.name}>{type.type.name.toUpperCase()}</p>
      )
    }
  </div>       
</div>
)

export default CSSModules(PokemonCard, styles);