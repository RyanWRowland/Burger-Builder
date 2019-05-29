import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';

const OrderSummary = ({ ingredients }) => {
  const ingredientsSummary = Object.entries(ingredients).map(
    ([ingredient, quantity]) => (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
        {quantity}
      </li>
    )
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default OrderSummary;
