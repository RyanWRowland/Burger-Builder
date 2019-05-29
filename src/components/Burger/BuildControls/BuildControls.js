import React from 'react';
import PropTypes from 'prop-types';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = ({ ingredients, price }) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>${price.toFixed(2)}</strong>
    </p>
    {Object.entries(ingredients).map(([type, quantity]) => (
      <BuildControl key={type} type={type} disabled={quantity <= 0} />
    ))}
  </div>
);

BuildControls.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number,
};

export default BuildControls;
