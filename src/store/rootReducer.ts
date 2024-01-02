import { combineReducers } from 'redux';
import { ProductReducer } from './product/ProductSlice';
import { ZooReducer } from './zoo/ZooSlice';

const rootReducer = combineReducers({
  product: ProductReducer,
  zoo: ZooReducer,
});

export default rootReducer;
