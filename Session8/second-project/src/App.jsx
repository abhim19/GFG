import React, { useState } from "react";

const App = () => {
  let name = "Rahul";

  const [userName, setuserName] = useState("James");

  function handleClick(event) {
    console.log("Name", userName);
  }

  return (
    <div>
      <h1>Hello World - {userName}</h1>
      <button onClick={handleClick}>Submit</button>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
