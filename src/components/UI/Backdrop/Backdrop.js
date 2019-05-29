import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, close }) =>
  show ? (
    <div className={styles.Backdrop} onClick={close} role="presentation" />
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Backdrop;
