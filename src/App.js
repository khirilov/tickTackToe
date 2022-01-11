import React, { useState, useEffect } from "react";
import { calculateWinner } from "./helper";
import Board from "./components/Board";
import "./App.css";

const clearState = Array(9).fill(null);

const App = () => {
  console.log(clearState);
  const [gameState, updateGameState] = useState(clearState);
  const [isXChance, updateIsXChance] = useState(true);

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  };

  useEffect(() => {
    let winner = calculateWinner(gameState);
    if (winner) {
      alert(`The ${winner} won the Game !`);
    }
  }, [gameState]);

  return (
    <div className="App">
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board gameState={gameState} onClick={onUserClicked} />
    </div>
  );
};

export default App;
