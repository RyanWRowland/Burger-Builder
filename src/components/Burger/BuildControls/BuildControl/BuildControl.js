import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';

const BuildControl = ({ type, add, remove, disabled }) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{type}</div>
    <button
      disabled={disabled}
      onClick={remove.bind(null, type)}
      className={styles.Less}
      type="button"
    >
      Less
    </button>
    <button
      onClick={add.bind(null, type)}
      className={styles.More}
      type="button"
    >
      More
    </button>
  </div>
);

BuildControl.propTypes = {
  type: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default BuildControl;
