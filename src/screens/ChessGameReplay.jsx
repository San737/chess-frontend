import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

// eslint-disable-next-line react/prop-types
const ChessGameReplay = ({ pgn }) => {
  const [game, setGame] = useState(new Chess());
  const [currentMove, setCurrentMove] = useState(0);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const newGame = new Chess();
    newGame.loadPgn(pgn);
    setGame(new Chess()); // Start with an empty board
    setMoves(newGame.history({ verbose: true }));
  }, [pgn]);

  const handleNextMove = () => {
    if (currentMove < moves.length) {
      const newGame = new Chess(game.fen());
      newGame.move(moves[currentMove]);
      setGame(newGame);
      setCurrentMove(currentMove + 1);
    }
  };

  const handlePrevMove = () => {
    if (currentMove > 0) {
      const newGame = new Chess();
      for (let i = 0; i < currentMove - 1; i++) {
        newGame.move(moves[i]);
      }
      setGame(newGame);
      setCurrentMove(currentMove - 1);
    }
  };

  return (
    <div>
      <Chessboard position={game.fen()} />
      <div>
        <button onClick={handlePrevMove}>Previous</button>
        <button onClick={handleNextMove}>Next</button>
      </div>
      <div>Move: {currentMove} / {moves.length}</div>
    </div>
  );
};

//const pgn = `pgn data`
// <div className="App">
//       <h1>Chess Game Replay</h1>
//       <ChessGameReplay pgn={pgn} />
//     </div>

export default ChessGameReplay;