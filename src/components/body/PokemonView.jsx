import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokemonView.scss';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const PokemonView = (props) => (
  <div className="poke-view-wrapper">
  <div className="navigate">
    <div className="nav-part">
      <FontAwesomeIcon className='go-left' icon={faArrowLeft} onClick={props.goLeft}/>
      <p>#{props.pokemon.game_indices[0].game_index - 1} </p>
    </div>
    <div className="nav-part">
      <FontAwesomeIcon className='close-icon' onClick={props.exit} icon={faTimes} />  
    </div>
    <div className="nav-part">
      <p>#{props.pokemon.game_indices[0].game_index + 1}</p>
      <FontAwesomeIcon className='go-right' icon={faArrowRight} onClick={props.goRight}/>  
    </div>
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
      <p>Speed : {props.pokemon.stats[0].base_stat}</p>
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
      <div className="info-pair">
        <h5>Abilities</h5>
        <h4>{props.pokemon.abilities[1].ability.name.toUpperCase()}</h4>
      </div>
    </div>  
  </div>
)

export default CSSModules(PokemonView, styles);