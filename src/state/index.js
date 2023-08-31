import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  deals: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cart = initialState.cart;
    },
    setOrder: (state, action) => {
      state.cart = [
        ...state.cart,
        { ...action.payload.deal, count: action.payload.count },
      ];
    },
    setDeals: (state, action) => {
      state.deals = [...state.deals, ...action.payload.deals];
    },
    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload.id);
      // console.log('deals',state.deals)
    },

    increaseCount: (state, action) => {
      //console.log(state.items);
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload.id) {
          item.count++;
        }

        return item;
      });
      //console.log(state.cart);
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload.id) item.count--;
        return item;
      });
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload.total;
    },
  },
});

export const {
  setOrder,
  setDeals,
  setDeal,
  increaseCount,
  decreaseCount,
  deleteCartItem,
  setTotalAmount,
  resetCart
} = cartSlice.actions;

export default cartSlice.reducer;
