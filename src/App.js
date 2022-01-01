import React, { useRef } from 'react';
import { useSelector , useDispatch} from 'react-redux';

import { createStore } from 'redux';
import { increment , decrement } from './actions'
import Header from './components/header/Header';


function App() {

  const isLogged = useSelector(state => state.isLogged)
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <React.Fragment>
    <Header/>
    
    <button onClick={() => dispatch(decrement())}>-</button>
    Counter:{counter}
    <button onClick={() => dispatch(increment())}>+</button>
    
    {/* <Footer/> */}
    </React.Fragment>
  );
}

export default App;
