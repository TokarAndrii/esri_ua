import React from 'react';
import NavigationMenuItem from './navigationMenuItem/NavigationMenuItem';
import NavigationSubMenu from './navigationSubMenu/NavigationSubMenu';
import styles from './Navigation.module.css';

const Navigation = ({ navigationList }) => (
  <>
    <ul className={styles.navigationList}>
      {navigationList.map(navigationListItem => (
        <li key={navigationListItem.id} className={styles.listItem}>
          <NavigationMenuItem
            className={styles.link}
            name={navigationListItem.name}
            subMenu={navigationListItem.subMenu}
            id={navigationListItem.id}
            lineClassName={styles.line}
            isOpenSubMenu={navigationListItem.isOpenSubMenu}
          />
          {navigationListItem.isOpenSubMenu &&
            navigationListItem.subMenu.length > 0 && (
              <NavigationSubMenu list={navigationListItem.subMenu} />
            )}
        </li>
      ))}
    </ul>
  </>
);

export default Navigation;
