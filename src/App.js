import React from "react";
import "./styles/home.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
