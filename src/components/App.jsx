import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import PokedexHeader from 'components/header/PokedexHeader';
import Pokedex from 'components/body/Pokedex';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokeList: [],
      loaded: false,
      error: false
    }

  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then(response => response.json())
    .then(({results: pokedex}) => this.setState({pokeList: pokedex}));
  }

  render() {
    return (
      <div className="app-wrapper">
      <PokedexHeader />
      <Pokedex pokeList={this.state.pokeList}/>
      </div>
    )
  }

}

export default CSSModules(App, styles);