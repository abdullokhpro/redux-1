import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  let count = useSelector((state) => state.counter.value);
  let text = useSelector((state) => state.text.value);
  return (
    <div>
      <h2>Count {count}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Header;
