import React, { Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokedex.scss';
import PokemonCard from 'components/body/PokemonCard';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokedex: [],
    }
  } 

  componentDidMount() {
    let pokedexCopy = this.state.pokedex.slice();
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(response => response.json())
    .then(({results}) => results.map(result => {
      fetch(result.url)
      .then(response => response.json())
      .then(data => {
        result.image = data.sprites.front_default
        result.order = data.order
        result.weight = data.weight
        result.height = data.height
        result.types = this.getTypes(data.types)
      })
      pokedexCopy.push(result)
      return result
    }))
    .then(this.setState({pokedex: pokedexCopy}));
  }

  getTypes = (array) => {
   let types = [];
   array.forEach((item) => {
     types.push(item.type.name)
   })
   return types
  }

  render() {
    let pokeList = this.state.pokedex
    console.log(pokeList)
    return (
      <div className="pokedex-wrapper">
        {
          pokeList.map(pokemon => 
            <PokemonCard 
            poke={pokemon}
            />
            )
        }
      </div>
    );
  } 
};

export default CSSModules(Pokedex, styles);