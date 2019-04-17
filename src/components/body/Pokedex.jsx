import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokedex.scss';
import PokemonCard from 'components/body/PokemonCard';

const Pokedex = (props) => (
<div className="pokedex-wrapper">
  <div className="search-field">
    <input type="text" onChange={props.filterList} value={props.search}/>
  </div>
    {
      props.pokedex.filter(pokemon => 
          pokemon.name.toLowerCase().includes(
            props.search.toLowerCase())
      ).map((pokemon, index) =>
        <PokemonCard 
          key={pokemon.name}
          id={pokemon.game_indices[0].game_index}
          pokemon={pokemon}
          onClick={props.clicked}
        />
        )
    }
</div>
)

export default CSSModules(Pokedex, styles);