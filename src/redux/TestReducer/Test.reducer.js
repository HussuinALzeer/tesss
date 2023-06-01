import { TodoType } from "./Test.type";

import { DoneTodo } from "./Test.ut";

const INITIAL_STATE ={

    TodoList:[{}],
    counter:0

}   

const TodoReducer = (state= INITIAL_STATE , action) => {

    switch(action.type){

            //old code 
        case TodoType.ADD_TO_LIST:
            return{
                ...state,
                TodoList: [...state.TodoList,action.payload]
            }    

        case TodoType.REMOVE:

            return{
                ...state,
                TodoList:state.TodoList.filter(item => item.id !== action.payload)
            }    

        case TodoType.DONE:
            return{
                ...state ,
                TodoList: DoneTodo(state.TodoList,action.payload)
            }    


     
            default:
                return state;
    }
}

export default TodoReducer