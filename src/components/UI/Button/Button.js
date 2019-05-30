import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, click, type }) => {
  const classes = [styles.Button];
  if (type && type === 'Success') classes.push(styles.Success);
  else if (type && type === 'Danger') classes.push(styles.Danger);

  return (
    <button className={classes.join(' ')} onClick={click} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
