import React, { useState } from 'react'
import './counter.scss'

//React icons
import {AiOutlineArrowUp} from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Counter = () => {

    const [first, setfirst] = useState(0)

    const Add = () => {
        setfirst(first + 1)
    }

    const remove = () => {
        setfirst(first - 1)
    }

  return (
    <div className='counter-con'>

        <div className='btn' onClick={()=> Add()} ><AiOutlineArrowUp/></div>
            <div className="number" >{first}</div>
        <div className='btn' onClick={()=> remove()}><AiOutlineArrowDown/></div>    
    </div>
  )
}

export default Counter