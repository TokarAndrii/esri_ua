import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = ({ navigationList }) => (
  <ul className={styles.navigationList}>
    {navigationList.map(navigationListItem => (
      <NavLink className="" to={navigationListItem.path} activeClassName="">
        {navigationListItem.name}
      </NavLink>
    ))}
  </ul>
);

export default Navigation;
