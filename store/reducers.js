import { ADD_TASK, TASK_DONE } from "./actions";

const initialState = {
    tasks: [{name: '1ewpephpg', icon: 'square-o'}, {name: '2pejfpjpje', icon: 'square-o'}]
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TASK:

            return {
                ...state,
                tasks: [ ...state.tasks, action.task ]
            }
        case TASK_DONE:
            let arr = [];
            // const idx = state.tasks.indexOf(action.task);
            const item = {
                name: action.task,
                icon: 'check-square-o'
            };
            state.tasks.forEach(task => {
                if (task.name === action.task) {
                    task = item;
                }
                arr.push(task);
            })

            return {
                ...state,
                tasks: arr
            }
        default:
            return state;
    };
};