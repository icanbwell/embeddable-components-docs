import React, { useEffect } from "react";
import "./App.css";
import "@icanbwell/data-connection";

function App() {
  useEffect(() => {
    window.bwell.init("n6X9fEW9B0u6qlCCHVGsULk+i1wBiCnu6xGmzh8uIm8=");
  }, []);
  return (
    <div className="App">
      <bwell-data-connection></bwell-data-connection>
    </div>
  );
}

export default App;
