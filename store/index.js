import { createStore } from 'redux';

import Reducers, {initialState} from '../reducers/noteReducer';
const store = createStore(Reducers, initialState);
export default store;