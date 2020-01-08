import React, { useState } from "react";

function App() {
  const [name, SetName] = useState("");
  function changeName(event) {
    SetName(event.target.value);
  }
  const [heading, SetHeading] = useState("");
  function headHeading() {
    SetHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input
        value={name}
        onChange={changeName}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={headHeading}>Submit</button>
      <h2>{heading}</h2>
    </div>
  );
}

export default App;
