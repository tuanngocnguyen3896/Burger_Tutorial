import {combineReducers, createStore} from 'redux';
import {BurgerReducer} from './reducers/BurgerReducer'
const rootReducer = combineReducers({
    BurgerReducer
});
export const store = createStore(rootReducer);