import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import PokedexHeader from 'components/header/PokedexHeader';
import Pokedex from 'components/body/Pokedex';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokedex: [],
      search: '',
      loaded: false,
      error: false
    }

  }

  
  filterList = e => {
    this.setState({ search: e.target.value});
  }

  getList = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
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
    return (
      <div className="app-wrapper">
      <PokedexHeader />
      <Pokedex pokedex={this.state.pokedex} filterList={this.filterList} search={this.state.search}/>
      </div>
    )
  }

}

export default CSSModules(App, styles);