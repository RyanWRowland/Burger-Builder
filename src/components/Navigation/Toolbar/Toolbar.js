import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const Toolbar = ({ toggleSideDrawer }) => (
  <header className={styles.Toolbar}>
    <Button type="DrawerToggle" click={toggleSideDrawer}>
      <div />
      <div />
      <div />
    </Button>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

Toolbar.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired,
};

export default Toolbar;
