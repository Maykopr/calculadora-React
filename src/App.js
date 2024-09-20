import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

export default function App() {
      const [valueScreen, setValueScreen] = useState("0");
      const [memory, setMemory] = useState("");
      const [equalIsPressed, setEqualIsPressed] = useState(false);

      return (
            <div className="App">
                  <Display value={valueScreen} memory={memory} />
                  <Buttons
                        value={valueScreen}
                        setValue={setValueScreen}
                        memory={memory}
                        setMemory={setMemory}
                        equal={equalIsPressed}
                        setEqual={setEqualIsPressed}
                  />
            </div>
      );
}
