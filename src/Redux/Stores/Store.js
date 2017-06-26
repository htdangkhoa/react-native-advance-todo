import * as redux from 'redux';
import { Reducer } from '../Reducers/Reducer';

export const store = redux.createStore(Reducer);
