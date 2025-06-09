import { createSlice } from '@reduxjs/toolkit';

export interface ShoppingCartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    imageUrl: string;
};

export interface ShoppingCartState {
    items: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
    items: [],
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

// This code defines a Redux slice for managing a shopping cart in an e-commerce application.
// It includes actions to add, remove, update item quantities, and clear the cart.
// The state is initialized with an empty array of items, and each item has an id, name, price, and quantity.
// The slice is created using Redux Toolkit's createSlice function, which simplifies the process of creating actions and reducers.
// The actions can be dispatched to modify the shopping cart state in a Redux store.
// The shopping cart state can be used in a React application to display items in the cart, update quantities, and manage the overall shopping experience for users.
