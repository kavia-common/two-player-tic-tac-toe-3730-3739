/**
 * Calculates the winner of a 3x3 Tic Tac Toe board.
 * @param {Array} squares - The board as an array of 9 elements ("X", "O", or null).
 * @returns {{winner: string|null, line: Array|null}} - An object with the winner ("X" or "O") and winning line (array of indices), or nulls.
 */
// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}
