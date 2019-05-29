import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';
import ControlsContext from '../../../../context/ControlsContext';

const BuildControl = ({ type, disabled }) => {
  const { addIngredient, removeIngredient } = useContext(ControlsContext);

  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{type}</div>
      <button
        disabled={disabled}
        onClick={removeIngredient.bind(null, type)}
        className={styles.Less}
        type="button"
      >
        Less
      </button>
      <button
        onClick={addIngredient.bind(null, type)}
        className={styles.More}
        type="button"
      >
        More
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default BuildControl;
