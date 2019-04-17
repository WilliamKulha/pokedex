import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokemonView.scss';

const PokemonView = (props) => (
  <div className="poke-view-wrapper">
  <div className="navigate">
  
  </div>
    <div className="poke-name">
      <h1 className="title">{props.pokemon.name}</h1>
      <h2>#{props.pokemon.id}</h2>
    </div>
    <div className="poke-image">
    <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
    </div>
    <div className="stats">
      <h3>Base Stats</h3>
      <p>HP : {props.pokemon.stats[5].base_stat}</p>
      <p>Attack : {props.pokemon.stats[3].base_stat}</p>
      <p>Defense : {props.pokemon.stats[4].base_stat}</p>
      <p>Special Attack : {props.pokemon.stats[2].base_stat}</p>
      <p>Special Defense : {props.pokemon.stats[1].base_stat}</p>
      <p>Speed : {props.pokemon.stats[0].base_state}</p>
    </div>
    <div className="extra-info">
      <div className="info-pair">
        <h5>Height</h5>
        <h4>{(props.pokemon.height / 10)}m</h4>
      </div>
      <div className="info-pair">
        <h5>Weight</h5>
        <h4>{(props.pokemon.weight / 10)}kg</h4>
      </div>
    </div>  
    <button className="close" onClick={props.exit}>CLOSE</button>  
  </div>
)

export default CSSModules(PokemonView, styles);