import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';
import PokedexHeader from 'components/header/PokedexHeader';
import PokedexBody from 'components/body/PokedexBodhy';

const App = () => (
  <div className="app-wrapper">
  <PokedexHeader />
  <PokedexBody />
  </div>
);

export default CSSModules(App, styles);