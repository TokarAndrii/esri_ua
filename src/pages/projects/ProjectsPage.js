import React from 'react';
import NavigationSubMenu from '../../components/navigation/navigationSubMenu/NavigationSubMenu';
import navList from '../../assets/navList';
import styles from './ProjectsPage.module.css';

const subMenu = navList
  .map(current => (current.name === 'Проекти' ? current.subMenu : null))
  .filter(curr => curr !== null)[0];

console.log(subMenu, 'subMenu');

const ProjectsPage = () => (
  <div className={styles.projectsPage}>
    <NavigationSubMenu list={subMenu} />;
  </div>
);

export default ProjectsPage;
