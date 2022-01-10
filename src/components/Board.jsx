import React from "react";
import Squere from "./Squere";

const Board = ({ gameState, onClick }) => {
  return (
    <div className="board">
      {gameState.map((el, i) => {
        return <Squere key={i} el={el} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
