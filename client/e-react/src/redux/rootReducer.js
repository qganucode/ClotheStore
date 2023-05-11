import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import favouriteReducer from './favouriteReducer';
import userProfileReducer from './userProfileReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    favourite: favouriteReducer,
    userProfile: userProfileReducer,
});

export default rootReducer;