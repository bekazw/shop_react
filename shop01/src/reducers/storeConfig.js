import { combineReducers } from 'redux';
import prodStore from './products';
import Basket from './init';

const RootReducer = combineReducers({
    prodStore,
    Basket
});

export default RootReducer;