import { configureStore } from '@reduxjs/toolkit';
import shoppingCart from './chartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCart
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
