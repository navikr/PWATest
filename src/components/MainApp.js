import React, { useState } from "react";
import Notes from "./Notes";
import Counter from "./Counter";
import "../styles/MainApp.css";

const MainApp = () => {
  const [count, setCount] = useState(0);
  const notesCount = (setTo = undefined) => {
    if (setTo !== undefined) {
      setCount(setTo);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <Counter count={count} />
      </div>
      <div className="body">
        <Notes incrementNotes={notesCount} />
      </div>
    </div>
  );
};

export default MainApp;
