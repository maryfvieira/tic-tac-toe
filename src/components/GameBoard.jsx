import { useState } from "react";

//lifting state up example
const initilGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initilGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      //boa pratica sempre que precisar atualizar um
      // objeto/array dentro do estado , deve-se atualizar
      // a copia dele e nao ele em si ja que e os valores dele sao valores por referencia
      // e nao por valor, deve-se atualizar o objeto de forma imutavel
      //ler mais sobre update object ou array state values in react doc

      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
