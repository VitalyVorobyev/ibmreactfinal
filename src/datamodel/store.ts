// store.js
import { configureStore } from '@reduxjs/toolkit';
import shopingChart from './shopingChart';

export default configureStore({
    reducer: { chart: shopingChart }
});
