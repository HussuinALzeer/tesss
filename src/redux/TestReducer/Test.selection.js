import {createSelector} from 'reselect'

const select = state => state.TodoReducer;

export const selectTodoList = createSelector(
    [select],
    productL=> productL.TodoList
)