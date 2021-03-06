import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, click }) =>
  show ? (
    <div className={styles.Backdrop} onClick={click} role="presentation" />
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default Backdrop;
