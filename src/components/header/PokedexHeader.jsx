import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/headerStyles.scss';
import Title from 'components/header/Title';

const PokedexHeader = () => (
  <div className="header-wrapper">
    <Title />

  </div>
);

export default CSSModules(PokedexHeader, styles);