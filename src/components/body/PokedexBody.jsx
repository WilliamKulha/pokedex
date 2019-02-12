import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/body.scss';

const PokedexBody = () => (
  <h1>Hey there</h1>
);

export default CSSModules(PokedexBody, styles);