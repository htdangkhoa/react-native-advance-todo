import {
    TOGGLE_COMPLETED
} from '../Actions/Action';

export const toggleCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_COMPLETED:
            return !state;    
        default:
            return state;
    }
};