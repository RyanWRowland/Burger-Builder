import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ControlsContext from '../../context/ControlsContext';

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
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const ingredientCount = ingredients[type];
    const updatedCount = ingredientCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const newPrice = totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
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

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };

  render() {
    const { ingredients, totalPrice } = this.state;

    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <ControlsContext.Provider
          value={{
            addIngredient: this.addIngredientHandler,
            removeIngredient: this.removeIngredientHandler,
          }}
        >
          <BuildControls ingredients={ingredients} price={totalPrice} />
        </ControlsContext.Provider>
      </Aux>
    );
  }
}

export default BurgerBuilder;
