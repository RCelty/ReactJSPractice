import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import Component1 from "./Component1";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Component1></Component1>}
    </div>
  );
}

export default App;
