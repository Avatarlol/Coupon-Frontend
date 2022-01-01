import React, { useRef } from 'react';
import { useSelector , useDispatch} from 'react-redux';

import { createStore } from 'redux';
import { increment , decrement } from './actions'


function App() {

  const isLogged = useSelector(state => state.isLogged)
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <React.Fragment>

    <button onClick={() => dispatch(decrement())}>-</button>
    Counter:{counter}
    <button onClick={() => dispatch(increment())}>+</button>
    
    </React.Fragment>
  );
}

export default App;
