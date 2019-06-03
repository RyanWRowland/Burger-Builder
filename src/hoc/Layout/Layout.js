import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../Aux/Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} close={this.sideDrawerCloseHandler} />
        <main className={styles.Content}>{children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
