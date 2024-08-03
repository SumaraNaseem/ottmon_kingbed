// reducer.js
const initialState = {
  cartItems: [],
  cartLength: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id
              ? { ...x, quantity: x.quantity + 1, price: (parseFloat(x.price) + parseFloat(item.price)).toFixed(2) }
              : x
          ),
          cartLength: state.cartLength + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          cartLength: state.cartLength + 1,
        };
      }

    case 'REMOVE_FROM_CART':
      const removedItem = state.cartItems.find((cartItem) => cartItem._id === action.payload);
      if (removedItem) {
        return {
          ...state,
          cartItems: state.cartItems.filter((cartItem) => cartItem._id !== action.payload),
          cartLength: state.cartLength - removedItem.quantity,
        };
      } else {
        return state;
      }


    // case "REMOVE_CART":
    //   // Find the item to be removed
    //   const removedItem = state.cartItems.find(cartItem => cartItem._id === action.payload);
    //   console.log('removedItem----', removedItem)
    //   // Check if the item exists
    //   if (removedItem) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.filter(cartItem => cartItem._id !== action.payload),
    //       cartLength: state.cartLength - removedItem.quantity,
    //     };
    //   } else {
    //     // If item is not found, return the current state
    //     return state;
    //   }

    // case "REMOVE_CART":

    //   const removedItem = state.cartItems.find((cartItem) => cartItem._id === action.payload);
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter((cartItem) => cartItem._id !== action.payload),
    //     cartLength: state.cartLength - removedItem.quantity,
    //   };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        cartLength: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
