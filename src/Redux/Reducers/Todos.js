import {
    INITIALIZE,
    ADD_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../Actions/Action';

var todos = [
    {
        content: 'Android',
        isCompleted: false,
        createOn: '06/25/2017'
    },
    {
        content: 'iOS',
        isCompleted: true,
        createOn: '06/25/2017'
    },
    {
        content: 'NodeJS',
        isCompleted: false,
        createOn: '06/25/2017'
    },
    {
        content: 'AngularJS',
        isCompleted: true,
        createOn: '06/25/2017'
    },
    {
        content: 'React Native',
        isCompleted: false,
        createOn: '06/25/2017'
    }
];

export const TodosReducer = (state = todos, action) => {
    switch (action.type) {
        case INITIALIZE:
            return state;
        case ADD_TODO:
            console.log('check', state);
            return [...state, action.item];
        case TOGGLE_TODO:
            state[action.index].isCompleted = !state[action.index].isCompleted;
            return [...state];
        case UPDATE_TODO: 
            state[action.index].content = action.item.content;
            state[action.index].isCompleted = action.item.isCompleted;
            return [...state];
        case DELETE_TODO:
            return state.filter((e, i) => i !== parseInt(action.index));
        default:
            return state;
    }
};