import React from "react";
import Square from "./Square";

// PUBLIC_INTERFACE
/**
 * The Tic Tac Toe board (3x3 grid).
 * @param {Object} props
 * @param {Array} props.squares - Array of 9 cell values.
 * @param {(i:number) => void} props.onSquareClick - Handler for square click.
 * @param {Array|null} props.winningLine - Indices of the winning cells.
 * @param {boolean} props.disabled - Disables all squares.
 */
function Board({ squares, onSquareClick, winningLine, disabled }) {
  function renderSquare(i) {
    const isWinner = winningLine && winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinner={isWinner}
        disabled={disabled || squares[i]}
        index={i}
      />
    );
  }

  return (
    <div className="tic-board" role="grid" aria-label="Tic Tac Toe board">
      {[...Array(9)].map((_, i) => renderSquare(i))}
    </div>
  );
}

export default Board;
