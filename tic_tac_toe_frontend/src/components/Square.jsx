import React from "react";

// PUBLIC_INTERFACE
/**
 * A single square in the Tic Tac Toe grid.
 * @param {Object} props
 * @param {string} props.value - "X", "O", or null.
 * @param {() => void} props.onClick - Click handler.
 * @param {boolean} props.isWinner - True if this square is part of a winning line.
 * @param {boolean} props.disabled - Disables input if true.
 * @param {number} props.index - Index of the square for aria-label.
 */
function Square({ value, onClick, isWinner, disabled, index }) {
  return (
    <button
      className={`tic-square${isWinner ? " winner-cell" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`cell ${index + 1}${value ? `, ${value}` : ", empty"}`}
      aria-pressed={!!value}
      tabIndex={0}
      type="button"
      role="button"
      data-testid={`cell-${index}`}
    >
      <span className={value === "X" ? "tic-playerX" : value === "O" ? "tic-playerO" : ""}>
        {value}
      </span>
    </button>
  );
}

export default Square;
