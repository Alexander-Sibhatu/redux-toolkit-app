import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }
  const handleReset = () => {
    dispatch(reset());
  }
  return (
    <div>
      <h2>counter: {count}</h2>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
    
  
  )
};

export default Counter