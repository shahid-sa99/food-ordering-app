import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  //  this is can be any dataType it is not mandatory that it should be object only
  initialState: {
    items: [],
  },

  reducers: {
    //addItem is actionName and function after colon is reducer function which updates the cart slice
    adddItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // PTK says either mutate the state or return the updated the state with changes

      // 1. mutating the state
      state.items = [];

      //2. returning the updated state
      // return { items: [] };
    },
  },
});

export const { adddItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
