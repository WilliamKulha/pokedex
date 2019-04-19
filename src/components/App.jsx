import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import PokedexHeader from 'components/header/PokedexHeader';
import Pokedex from 'components/body/Pokedex';
import PokemonView from 'components/body/PokemonView';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokedex: [],
      search: '',
      currentPokemon : null,
      loaded: false,
      error: false
    }

  }

  exitPokemonView = () => {
    this.setState({currentPokemon : null})
  }

  clickPokemon = async (index) => {
    await this.setState({currentPokemon : this.state.pokedex[index - 1]})
  }

  getCurrentPokedexIndex = () => {
    return this.state.pokedex.indexOf(this.state.currentPokemon)
  }

  movePokedexLeft = () => {
    if(this.getCurrentPokedexIndex() !==0) {
      this.setState({currentPokemon : this.state.pokedex[this.getCurrentPokedexIndex() - 1]})
    }

  }

  movePokedexRight =() => {
    if(this.getCurrentPokedexIndex() !== this.state.pokedex.length) {
      this.setState({currentPokemon : this.state.pokedex[this.getCurrentPokedexIndex() + 1]})
    }
  }
  
  filterList = e => {
    this.setState({ search: e.target.value});
  }

  getList = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=250`)
    .then(resp => resp.json())
  }

  getPokemon = (pokelist) => {
    const promises = pokelist.results.map(async pokemon => {
      return await fetch(`${pokemon.url}`)
      .then(resp => resp.json())
    })
    return Promise.all(promises);
  }

  componentDidMount() {
    this.getList()
      .then(bigList => {
        return this.getPokemon(bigList)
          .then(results => this.setState({pokedex: results}))
      });
      this.setState({loaded : true});
    }

  render() {
    if( this.state.currentPokemon !== null) {
      return (
        <div className="app-wrapper">
          <PokedexHeader />
          <PokemonView 
            pokemon={this.state.currentPokemon} 
            exit={this.exitPokemonView} 
            pokedex={this.state.pokedex} 
            goLeft={this.movePokedexLeft} 
            goRight={this.movePokedexRight}
          />
        </div>
      )
    } else {
      return (
        <div className="app-wrapper">
          <PokedexHeader />
          <Pokedex 
            pokedex={this.state.pokedex} 
            filterList={this.filterList} 
            search={this.state.search} 
            clicked={this.clickPokemon}
          />
        </div>
      )
    }
  }

}

export default CSSModules(App, styles);