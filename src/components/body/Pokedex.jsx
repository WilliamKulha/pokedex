import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokedex.scss';
import PokemonCard from 'components/body/PokemonCard';

const Pokedex = (props) => (
<div className="pokedex-wrapper">
  <div className="search-field">
    <input type="text" onChange={props.filterList}/>
  </div>
    {
      props.pokedex.filter(pokemon => 
          pokemon.name.toLowerCase().includes(
            props.search.toLowerCase())
      ).map((pokemon, index) =>
        <PokemonCard 
          key={index}
          pokemon={pokemon}
        />
        )
    }
</div>
)

export default CSSModules(Pokedex, styles);