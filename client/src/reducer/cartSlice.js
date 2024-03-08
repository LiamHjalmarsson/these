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
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
            state.total += newItem.price;
        },
        removeItemFromCart: (state, action) => {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                const removedItem = state.cartItems.splice(index, 1)[0];
                state.total -= removedItem.price * removedItem.quantity;
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