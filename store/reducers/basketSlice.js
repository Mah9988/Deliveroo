import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product its not in basket!");
      }

      state.items = newBasket;
    },
  },
});

// select all items
export const selectBasketItems = (state) => state.basket.items;

// select specific items
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

// select total price basket
export const selectBasketTotal = (state, id) =>
  state.basket.items.reduce((total, items) => (total += items.price), 0);

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
