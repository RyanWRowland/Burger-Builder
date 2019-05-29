import React from 'react';

const ControlsContext = React.createContext({
  addIngredient: () => {},
  removeIngredient: () => {},
});

export default ControlsContext;
