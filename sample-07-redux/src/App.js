import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, user } from './actions';
import Test from "./test";
import myStore from "./store";

const App = () => {
  const counter = useSelector(state=>state.Counter);
  const isLogged = useSelector(state=>state.LoggedType);
  const dispatchCustom = useDispatch();

  return (
    <div className="App">
      <h2>Parent Counter : {counter}</h2>
      <button onClick={()=>myStore.dispatch(increment(2))}>Increament +</button>
      <br/><br/><br/>
      <button onClick={()=>dispatchCustom(decrement())}>Decreament -</button>
      <br/><br/><br/>
      <button onClick={()=>dispatchCustom(user())}>Show/Hide</button>
      <h2> {isLogged ? <p>I am online</p>: <p>I am offline</p>}</h2>
      <Test/>
    </div>
  );
}

export default App;
