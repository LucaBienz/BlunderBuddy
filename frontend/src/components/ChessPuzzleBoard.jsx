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

      try {
        const res = await fetch("http://localhost:5000/api/evaluate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fen: gameCopy.fen() }),
        });

        const data = await res.json();
        setMessage(`Best move: ${data.best_move}, Eval: ${data.evaluation.value}`);
      } catch (err) {
        console.error("Error evaluating position:", err);
        setMessage("Something went wrong...");
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <Chessboard
          position={game.fen()}
          onPieceDrop={(s, t) => makeMove({ from: s, to: t })}
          boardWidth={400}
        />
        <p className="mt-2 text-sm text-[var(--text-color)]">{message}</p>
      </div>
    </div>
  );
}
