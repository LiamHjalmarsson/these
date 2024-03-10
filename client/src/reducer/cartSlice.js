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
            let existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
            state.total += newItem.price;
        },
        removeItemFromCart: (state, action) => {
            let index = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                let removedItem = state.cartItems.splice(index, 1)[0];
                state.total -= removedItem.price * removedItem.quantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        },
        increaseQuantity: (state, action) => {
            let item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity++;
                state.total += item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            let item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                if (item.quantity === 1) {
                    state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
                    state.total -= item.price;
                } else {
                    item.quantity--;
                    state.total -= item.price;
                }
            }
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;