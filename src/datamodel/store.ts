// store.js
import { configureStore } from '@reduxjs/toolkit';
import shopingChart from './chartSlice';

export default configureStore({
    reducer: { chart: shopingChart }
});
