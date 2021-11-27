import { ADD_TASK } from "./actions";

const initialState = {
    tasks: ['1ewpephpg', '2pejfpjpje']
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TASK:

            return {
                ...state,
                tasks: [ ...state.tasks, action.task ]
            }
        default:
            return state;
    };
};