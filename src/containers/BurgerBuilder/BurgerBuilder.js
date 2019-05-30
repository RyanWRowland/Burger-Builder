import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  base: 4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: INGREDIENT_PRICES.base,
    purchasable: false,
    purchasing: false,
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchasingContinueHandler = () => {
    alert('checking out');
  };

  updatePurchaseable = () => {
    const { ingredients } = this.state;
    const purchasable = Object.values(ingredients).some(
      quantity => quantity > 0
    );
    this.setState({ purchasable });
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const ingredientCount = ingredients[type];
    const updatedCount = ingredientCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const newPrice = totalPrice + INGREDIENT_PRICES[type];

    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients,
      },
      this.updatePurchaseable
    );
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const ingredientCount = ingredients[type];
    if (ingredientCount <= 0) {
      return;
    }
    const updatedCount = ingredientCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const newPrice = totalPrice - INGREDIENT_PRICES[type];

    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients,
      },
      this.updatePurchaseable
    );
  };

  render() {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;

    return (
      <Aux>
        <Modal show={purchasing} cancel={this.purchasingCancelHandler}>
          <OrderSummary
            cancel={this.purchasingCancelHandler}
            checkout={this.purchasingContinueHandler}
            ingredients={ingredients}
            price={totalPrice}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          ingredients={ingredients}
          price={totalPrice}
          purchasable={purchasable}
          order={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
