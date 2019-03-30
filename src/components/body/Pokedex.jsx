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
  
  filterList = e => {
    this.setState({ search: e.target.value});
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then(response => response.json())
    .then(({results: pokedex}) => this.setState({pokedex: pokedex}));
  }


  render() {
    let pokeList = this.state.pokedex
    if(pokeList.length > 0) {
      return (
        <div className="pokedex-wrapper">
        <div className="search-field">
          <input type="text" onChange={this.filterList}/>
        </div>
          {
            pokeList.map((pokemon, index) =>
              <PokemonCard 
                key={index}
                poke={pokemon}
              />
              )
          }
        </div>
      );
    }   
  } 
};

export default CSSModules(Pokedex, styles);