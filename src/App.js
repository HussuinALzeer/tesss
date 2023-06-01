import './App.css';

import { Routes,Route, useParams } from 'react-router-dom';


import { connect } from 'react-redux';

import Counter from './Test/Counter/Counter';
import Todolist from './Test/TodoList/Todolist';
import Headertest from './Test/header/Header';

// test 


function App({ControlPanelSelector ,ControlPanel}) {
 
  // console.log(ControlPanelSelector)

  return (
    <div className="App">

      <Headertest/>
      <Routes>
      <Route  path='/Counter' element={<Counter/>}  />
      <Route  path='/Todolist' element={<Todolist/>}  />
        
      </Routes>
    </div>

  );
}

const mapStateProp = (state) =>({
 
})

const mapdispatchProp = (dispatch) => ({

 
})

export default connect(mapStateProp,mapdispatchProp)(App);
