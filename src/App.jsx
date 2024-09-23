import React from "react";
import "./App.css";
import Routers from "./Space/Routes/Routers";
import Header from "./Space/Header/Header";

function App() {
  return (
    <div className="app-container">
      <main>
        <Routers />
      </main>
    </div>
  );
}

export default App;
