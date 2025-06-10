import React from "react";
import "./styles/App.css";
import LoveMessage from "./components/LoveMessage";

function App() {
  return (
    <div
      className="app-container"
      style={{
        backgroundImage: "url('/fundo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <LoveMessage />
    </div>
  );
}

export default App;
