import {combineReducers} from 'redux';
import products from './products'
import itemEditing from './itemeditting'
const appReducers = combineReducers({
    products,
    itemEditing
});

export default appReducers;