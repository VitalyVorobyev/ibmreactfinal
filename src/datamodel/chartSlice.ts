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
    aromaticPlants: string[];
    medicinalPlants: string[];
    lowMaintenancePlants: string[];
}

const initialState: ShoppingCartState = {
    items: [
        {
            id: '1',
            name: 'Aloe Vera',
            description: 'Aloe Vera is a succulent plant species of the genus Aloe. It is widely known for its medicinal and cosmetic uses.',
            price: 15.99,
            quantity: 0,
            imageUrl: '/aloe_vera.png'
        },
        {
            id: '2',
            name: 'Snake Plant',
            description: 'The Snake Plant, also known as Sansevieria, is a hardy houseplant that can survive in low light and requires minimal care.',
            price: 12.49,
            quantity: 0,
            imageUrl: '/snake_plant.png'
        },
        {
            id: '3',
            name: 'Lavender',
            description: 'Lavender is a fragrant herb known for its calming properties and beautiful purple flowers.',
            price: 9.99,
            quantity: 0,
            imageUrl: '/lavender.png'
        },
        {
            id: '4',
            name: 'Eucalyptus',
            description: 'Eucalyptus is an aromatic plant with a distinct fresh scent and medicinal properties.',
            price: 18.99,
            quantity: 0,
            imageUrl: '/eucalyptus.png'
        },
        {
            id: '5',
            name: 'Mint',
            description: 'Mint is a refreshing herb perfect for culinary uses and aromatherapy.',
            price: 7.99,
            quantity: 0,
            imageUrl: '/mint.png'
        },
        {
            id: '6',
            name: 'Chamomile',
            description: 'Chamomile is a daisy-like plant known for its calming tea and medicinal benefits.',
            price: 8.99,
            quantity: 0,
            imageUrl: '/chamomile.png'
        }
    ],
    aromaticPlants: ['3', '4', '5'],  // Lavender, Eucalyptus, Mint
    medicinalPlants: ['1', '4', '6'], // Aloe Vera, Eucalyptus, Chamomile
    lowMaintenancePlants: ['1', '2']  // Aloe Vera, Snake Plant
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(i => i.id === itemId);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(i => i.id === itemId);
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity -= 1;
            }
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items.forEach(item => {
                item.quantity = 0;
            });
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
