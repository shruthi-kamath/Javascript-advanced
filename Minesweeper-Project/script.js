//Display/UI

import { createBoard } from "./minesweeper.js";
const BOARD_SIZE = 10;
const NUMBER_OF_MINE = 2;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINE)
const boardElement = document.querySelector(".board")

console.log(board)
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
});

boardElement.style.setProperty("--size", BOARD_SIZE)

//1. Populate a board with tiles/mines
//2. Left click on tiles
    //a. Reveal tiles
//3. Right click on tiles
    //a. Mark tiles
//4. Check for win/lose