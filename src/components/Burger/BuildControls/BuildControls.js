import React from 'react';
import PropTypes from 'prop-types';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  price,
  purchasable,
  order,
}) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>${price.toFixed(2)}</strong>
    </p>
    {Object.entries(ingredients).map(([type, quantity]) => (
      <BuildControl
        key={type}
        type={type}
        add={addIngredient}
        remove={removeIngredient}
        disabled={quantity <= 0}
      />
    ))}
    <button
      disabled={!purchasable}
      className={styles.OrderButton}
      onClick={order}
      type="button"
    >
      ORDER NOW
    </button>
  </div>
);

BuildControls.propTypes = {
  ingredients: PropTypes.object.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  order: PropTypes.func.isRequired,
};

export default BuildControls;
