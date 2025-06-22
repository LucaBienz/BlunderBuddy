import { Chessboard } from "react-chessboard";
import { useState } from "react";
import { Chess } from "chess.js";

export default function ChessPuzzleBoard() {
  const [game, setGame] = useState(new Chess());
  const [message, setMessage] = useState("");

  const makeMove = async (move) => {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);

    if (result) {
      setGame(gameCopy);

      // Send FEN to backend for evaluation
      const res = await fetch("http://localhost:5000/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fen: gameCopy.fen() }),
      });

      const data = await res.json();
      setMessage(`Best move: ${data.best_move}, Eval: ${data.evaluation.value}`);
    }
  };

  return (
    <div>
      <Chessboard position={game.fen()} onPieceDrop={(s, t) => makeMove({ from: s, to: t })} />
      <p>{message}</p>
    </div>
  );
}
