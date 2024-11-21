  import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  interface CartItem {
    price: any;
    id: string; 
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    imgUrl: string;
    discountPercentage: number;
  }

  interface CartState {
    cart: CartItem[];
  }

  const initialState: CartState = {
    cart: [],
  };

  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItem(state, action: PayloadAction<CartItem>) {
        // payload is the new dish to add
        state.cart.push(action.payload);
        console.log("Cart after addItem:", JSON.stringify(state.cart));
      },
      deleteItem(state, action: PayloadAction<string>) {
        // payload is the id of the item to delete
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      },
      increaseQuantity(state, action: PayloadAction<string>) {
        // payload is the id of the item to increase quantity
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) {
          item.quantity++;
          item.totalPrice = item.quantity * item.unitPrice;
        }
      },
      decreaseQuantity(state, action: PayloadAction<string>) {
        // payload is the id of the item to decrease quantity
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) {
          item.quantity--;
          if (item.quantity <= 0) {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          } else {
            item.totalPrice = item.quantity * item.unitPrice;
          }
        }
      },
      clearCart(state) {
        // clear the entire cart
        state.cart = [];
      },
    },
  });

  export const {
    addItem,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = cartSlice.actions;

  export default cartSlice.reducer;

  // Selector functions
  export const getCart = (state: { cart: CartState }) => state.cart.cart;

  export const getTotalCartQuantity = (state: { cart: CartState }) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

  export const getTotalCartPrice = (state: { cart: CartState }) =>
    state.cart.cart.reduce((sum, item) => sum + Math.round(item.totalPrice*(1-item.discountPercentage/100)), 0);

  export const getCurrentQuantityById =
    (id: string) => (state: { cart: CartState }) =>
      state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
