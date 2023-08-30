import "./App.css";
import { createContext, useState } from "react";
import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";

export const store = createContext();

function App() {
  const [popupId, setId] = useState(1);

  const [active, setActive] = useState(false);

  return (
    <store.Provider value={[popupId, setId, active, setActive]}>
      <div className="App">
        <nav className="nav">
          <button onClick={() => setActive((prev) => !prev)}>
            {!active ? "Save" : "Saved"}
          </button>
        </nav>
        <div className="sub-container">
          <Block1 />
          <Block2 />
          <Block3 />
        </div>
      </div>
    </store.Provider>
  );
}

export default App;
