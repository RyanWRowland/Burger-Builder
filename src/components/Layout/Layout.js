import React from "react";

import Aux from "../../hoc/Aux";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
