import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, click, type }) => (
  <button
    className={`${styles.Button} ${type ? styles[type] : ''}`}
    onClick={click}
    type="button"
  >
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
