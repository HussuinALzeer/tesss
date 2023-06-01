import React, { useState } from 'react'
import './todolist.scss'
import {GrAdd} from 'react-icons/gr'

//Redux
import { connect } from 'react-redux'
import { AddToDolist, DoneToDolist } from '../../redux/TestReducer/Test.action'
import { selectTodoList } from '../../redux/TestReducer/Test.selection'
import { AiFillDelete } from 'react-icons/ai'

import { RemoveToDolist } from '../../redux/TestReducer/Test.action'
 
import uniqid from 'uniqid';

const Todolist = ({AddToDolist,selectTodoList,RemoveToDolist ,DoneToDolist}) => {

  const [text, setText] = useState('nn')
  
  const changeHandler = e => {
    setText(e.target.value)
 }

  const AddTOList = () =>{

    const id = uniqid()

    const data = {
      text:text,
      id:id,
      done:false
    }
    
    AddToDolist(data)

  }


  return (
    <div className='Todocounter'>
      
        <div className="box">

          <div className="addTodo">
              <input type="text" placeholder='Write here ...' name='text'  onChange={changeHandler} />
              <div className="btn-add" onClick={()=>AddTOList()} > <GrAdd/> </div>
          </div>

          <div className="List">
          {selectTodoList?.map((item,index) =>(
              <div key={index} className='flex jcsb' >
                  <div className={`Todo ${item.done}`} > 
                  {item.text}
                  </div>  

                  <div className="delete" onClick={()=>RemoveToDolist(item.id)}>
                    <AiFillDelete/> 
                  </div>


                  <div className="" onClick={()=>DoneToDolist(item.id)}>DONE</div>

                  {item.id}  

              </div>
            
            ))}

          

          </div>
        </div>

    </div>
  )
}

const mapToState = (state) =>({
  selectTodoList:selectTodoList(state)
})

const dispatchMap = (dispatch) =>({
  AddToDolist:add => dispatch(AddToDolist(add)),
  RemoveToDolist:remove => dispatch(RemoveToDolist(remove)),
  DoneToDolist: done => dispatch(DoneToDolist(done))
})

export default connect( mapToState , dispatchMap)(Todolist)