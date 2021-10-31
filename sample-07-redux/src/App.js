import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, user } from './actions';
import Test from "./test";

const App = () => {
  const counter = useSelector(state=>state.Counter);
  const isLogged = useSelector(state=>state.LoggedType);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter : {counter}</h2>
      <button onClick={()=>dispatch(increment(2))}>Increament +</button>
      <br/><br/><br/>
      <button onClick={()=>dispatch(decrement())}>Decreament -</button>
      <br/><br/><br/>
      <button onClick={()=>dispatch(user())}>Show/Hide</button>
      <h2> {isLogged ? <p>I am online</p>: <p>I am offline</p>}</h2>
      <Test/>
    </div>
  );
}

export default App;
