import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../context/slice/counterSlice";
import { changeText } from "../../context/slice/textSlice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hero</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(changeText())}>Change text</button>
    </div>
  );
};

export default Hero;
