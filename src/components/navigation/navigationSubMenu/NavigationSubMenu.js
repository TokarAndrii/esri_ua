import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationSubMenu.module.css';

const NavigationSubMenu = ({ list }) => (
  <ul className={styles.navigationSubMenuList}>
    {list.map(navigationListItem => (
      <li key={navigationListItem.id}>
        <Link
          className={styles.navigationSubMenuItem}
          to={navigationListItem.path}
          exact="true"
        >
          {navigationListItem.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavigationSubMenu;
