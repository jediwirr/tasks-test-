export const ADD_TASK = 'ADD_TASK';
export const TASK_DONE = 'TASK_DONE';

export const addTask = (task) => ({
    type: ADD_TASK,
    task
});

export const setTaskDone = (task) => ({
    type: TASK_DONE,
    task
});