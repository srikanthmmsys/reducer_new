import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./ReducerSlice";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <b>{count}</b>
      <button onClick={() => dispatch(increment(5))}>increment</button>
    </div>
  );
};

export default CounterComponent;
