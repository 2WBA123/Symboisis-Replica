import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../ActionReducer/productReducer';

export default configureStore({
	reducer: {
		Product: productReducer,
	},
});