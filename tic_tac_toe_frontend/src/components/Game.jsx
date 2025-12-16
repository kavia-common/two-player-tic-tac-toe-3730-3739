import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../utils/calculateWinner";

// PUBLIC_INTERFACE
/**
 * Main Game logic and UI container for Tic Tac Toe.
 * Manages board state, player turn, winner, draw, and reset.
 */
function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  // PUBLIC_INTERFACE
  function handleSquareClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext((x) => !x);
  }

  // PUBLIC_INTERFACE
  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const currentPlayer = xIsNext ? "X" : "O";

  return (
    <div className="tic-container">
      <div className="tic-game-surface" tabIndex={-1}>
        <div className="tic-title">Tic Tac Toe</div>
        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningLine={line}
          disabled={!!winner || isDraw}
        />
        <div className="tic-status" aria-live="polite">
          {winner ? (
            <span className="tic-winner">Winner: <span className={`tic-player${winner}`}>{winner}</span></span>
          ) : isDraw ? (
            <span className="tic-draw">It&apos;s a draw!</span>
          ) : (
            <span>
              Current Player:{" "}
              <span className={xIsNext ? "tic-playerX" : "tic-playerO"}>{currentPlayer}</span>
            </span>
          )}
        </div>
        <button className="tic-reset-btn" onClick={handleReset} aria-label="Reset game">
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Game;
