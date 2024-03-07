import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let newItem = action.payload;
            state.cartItems.push(newItem);
            state.total += newItem.price;
        },
        removeItemFromCart: (state, action) => {
            let index = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                const removedItem = state.cartItems.splice(index, 1)[0];
                state.total -= removedItem.price;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;