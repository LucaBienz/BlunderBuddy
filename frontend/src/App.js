import React from "react";
import ChessPuzzleBoard from "./components/ChessPuzzleBoard";

function App() {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>♟️ BlunderBuddy</h1>
      <p>Practice tactics and learn from your mistakes.</p>
      <ChessPuzzleBoard />
    </div>
  );
}

export default App;
