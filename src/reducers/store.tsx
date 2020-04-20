import { createStore } from 'redux';
import rootReducer from './rootR';

export const store = createStore(rootReducer);
