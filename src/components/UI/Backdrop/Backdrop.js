import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, cancel }) =>
  show ? (
    <div className={styles.Backdrop} onClick={cancel} role="presentation" />
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default Backdrop;
