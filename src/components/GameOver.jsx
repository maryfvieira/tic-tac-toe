export default function GameOver({ winner }) {
  return (
    <>
      <div id="game-over">
        <h2>Game over!</h2>
        {winner != null && <p>{winner} won</p>} 
        {winner==null && <p>It's a draw!</p>}
        <p>
          <button>Rematch!</button>
        </p>
      </div>
    </>
  );
}
