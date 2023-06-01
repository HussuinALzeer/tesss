import { TodoType } from "./Test.type";

export const AddToDolist = item =>({
    type: TodoType.ADD_TO_LIST,
    payload:item
})


export const RemoveToDolist = item =>({
    type: TodoType.REMOVE,
    payload:item
})

export const DoneToDolist = item =>({
    type: TodoType.DONE,
    payload:item
})