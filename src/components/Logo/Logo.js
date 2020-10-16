import React from 'react';
import classes from './Logo.module.css';
import BurgerLogo from '../../assets/Images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="Burger Builder"/>
  </div>
);

export default logo;