import React, { useState } from "react";
import "../styles/Counter.css";
const Counter = props => {
  return <h2 className="l-heading">Notes Count {props.count}</h2>;
};

export default Counter;
