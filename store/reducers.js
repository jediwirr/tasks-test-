import { ADD_TASK, TASK_DONE } from "./actions";

const initialState = {
    tasks: [{name: "Here's a task item", done: false}]
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

            state.tasks.forEach(task => {
                if (task.name === action.task) {
                    task.done = !task.done;
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