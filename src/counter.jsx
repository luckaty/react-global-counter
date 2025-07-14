import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function Counter() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default Counter;
