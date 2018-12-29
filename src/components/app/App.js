import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/home_page/HomePage';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
