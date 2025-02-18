import React from "react";

const App = () => {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default App;
