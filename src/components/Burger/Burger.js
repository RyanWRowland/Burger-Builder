import React from 'react';
import PropTypes from 'prop-types';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.entries(ingredients)
    .map(([ingredient, quantity]) =>
      [...Array(quantity)].map((_, i) => (
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      ))
    )
    .reduce((accArray, currentEl) => accArray.concat(currentEl), []);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length === 0 ? (
        <p>Please start adding ingredients</p>
      ) : (
        transformedIngredients
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Burger;
