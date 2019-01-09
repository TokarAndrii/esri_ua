import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterNavigation.module.css';

const FooterNavigation = ({ navigationList }) => (
  <ul className={styles.navigationList}>
    {navigationList.map(navigationListItem => (
      <li key={navigationListItem.id} className={styles.listItem}>
        <Link className={styles.link} to={navigationListItem.path}>
          {navigationListItem.name}
          <span className={styles.arrowHolder}>
            <img src="/images/icons/arrow.png" alt="arrow icon" />
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export default FooterNavigation;
