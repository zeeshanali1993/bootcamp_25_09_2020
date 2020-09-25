import React, { useState } from 'react';
import './App.css';
import { Counter } from './counterHandler.js';

export default function App()
{
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  // function incrementFunction()
  // {
  //   setCount(count + 1);
  // }
  // function decrementFunction()
  // {
  //   setCount(count - 1);
  // }
  return (
    <div className={isMorning ? 'box' : 'dayLight'}>
      {/* <h1>{count}</h1> */}
      <Counter counter={count} />
      <button onClick={() => setCount(count + 1)}>Increment +1</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement -1</button>
      <button onClick={() => setMorning(!isMorning)}>Toggle Daylight</button>
    </div>
  );
}
