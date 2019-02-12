import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import PokedexHeader from 'components/header/PokedexHeader';
import PokedexBody from 'components/body/PokedexBody';

const App = () => (
  <div className="app-wrapper">
  <PokedexHeader />
  <PokedexBody />
  </div>
);

export default CSSModules(App, styles);