import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import PokedexHeader from 'components/header/PokedexHeader';
import Pokedex from 'components/body/Pokedex';

const App = () => (
  <div className="app-wrapper">
  <PokedexHeader />
  <Pokedex />
  </div>
);

export default CSSModules(App, styles);