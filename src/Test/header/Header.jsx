import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import './Header.scss'

const Headertest = () =>{

    const nav = useNavigate()

    return(
        <div className="Heeaderr">

        <Link to={'/Counter'}>page 1</Link>
        <Link to={'/Todolist'}>page 2</Link>

        </div>
    )
}


export default Headertest