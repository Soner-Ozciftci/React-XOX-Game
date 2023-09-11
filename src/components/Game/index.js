import React, { useState } from "react";
import "./style.css";
import Box from "../Box";

function Game() {
  const [turn, setTurn] = useState("X");

  function changeTurn() {
    setTurn((turn) => (turn === "X" ? "O" : "X"));
  }
  return (
    <div id="game">
      <div className="row">
        <Box currentState={turn} changeTurn={changeTurn} />
        <Box currentState={turn} changeTurn={changeTurn} />
        <Box currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box currentState={turn} changeTurn={changeTurn} />
        <Box currentState={turn} changeTurn={changeTurn} />
        <Box currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box currentState={turn} changeTurn={changeTurn} />
        <Box currentState={turn} changeTurn={changeTurn} />
        <Box currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  );
}

export default Game;
