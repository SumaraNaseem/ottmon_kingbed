// actions.js
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeCart = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});