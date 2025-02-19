import React, { useState } from "react ";

const App = () => {
  let name = "";
  function handleClick(event) {
    name = event.target.value;
    console.log("Name", name);
  }

  return (
    <div>
      <h1>Hello World - {name}</h1>
      <button onClick={handleClick}>Submit</button>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          name = e.target.value;
        }}
      />
    </div>
  );
};

export default App;
