import React, { Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokedex.scss';
import PokemonCard from 'components/body/PokemonCard';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokedex: [],
      search: ''
    }
  } 

  getTypes = (array) => {
    let types = [];
    array.forEach((item) => {
      types.push(item.type.name)
    })
    return types
    }

  componentDidMount () {
    let temp = this.props.pokeList.map(pokemon => {
      let url = pokemon.url;
      let types = pokemon.types.slice()
      fetch(url)
      .then(response => response.json())
      .then(data => {
        let newTypes = this.getTypes(data.types)
        newTypes.forEach((type) => {
          types.push(type)
        })
        return {
          imageURL: data.sprites.front_default,
          types: types,
          height: data.height,
          weight: data.weight,
          number: data.order
        }
      })
    }) 

    this.setState({pokedex : temp});

  }
  
  filterList = e => {
    this.setState({ search: e.target.value});
  }

  render() {
    let pokeList = this.state.pokedex;
    if(pokeList.length > 0) {
      return (
        <div className="pokedex-wrapper">
        <div className="search-field">
          <input type="text" onChange={this.filterList}/>
        </div>
          {
            pokeList.filter(pokemon => 
                pokemon.name.toLowerCase().includes(
                  this.state.search.toLowerCase())
            ).map((pokemon, index) =>
              <PokemonCard 
                key={index}
                pokemon={pokemon}
              />
              )
          }
        </div>
      );
    }   
  } 
};

export default CSSModules(Pokedex, styles);