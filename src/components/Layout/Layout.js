import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const Layout = props => {
  const { children } = props;
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{children}</main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
