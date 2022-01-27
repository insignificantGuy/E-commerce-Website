import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer';
import {combineReducers} from 'redux';

export default combineReducers({
	user:userReducer,
	cart:cartReducer
});