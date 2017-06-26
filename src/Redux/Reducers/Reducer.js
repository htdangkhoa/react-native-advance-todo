import * as redux from 'redux';
import { TodosReducer } from './Todos';
import { toggleCompletedReducer } from './IsCompleted';

export const Reducer = redux.combineReducers({
    todos: TodosReducer,
    isCompleted: toggleCompletedReducer
});