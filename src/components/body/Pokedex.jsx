import React, { Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokedex.scss';
import PokemonCard from 'components/body/PokemonCard';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokedex: [],
      pokemonInfo: []
    }
  } 

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(response => response.json())
    // .then(({results}) => results.map(result => {
    //   getPokemonInfo(result.name);
    //   return result;
    // }))
    .then(({results: pokedex}) => this.setState({pokedex}))
  }

  

  render() {
    let pokedexList = this.state.pokedex;    
    return (
      <div className="pokedex-wrapper">
        {pokedexList.map((pokemon, index) => 
          <PokemonCard
            key={index}
            name={pokemon.name}
          />
          )}
      </div>
    );
  } 

};

// let getPokemonInfo = async function(name) {
//   let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
//   let json = await response.json();
//   console.log(json);
// }

export default CSSModules(Pokedex, styles);