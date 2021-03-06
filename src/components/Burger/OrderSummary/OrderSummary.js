import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ ingredients, price, cancel, checkout }) => {
  // React.useEffect(() => console.log('[OrderSummary] updated or mounted'));

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
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button type="Danger" click={cancel}>
        CANCEL
      </Button>
      <Button type="Success" click={checkout}>
        CONTINUE
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  cancel: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default OrderSummary;
