//Display/UI

import {TILE_STATUS, createBoard, markTile, revealTile, checkWin, checklose } from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMBER_OF_MINE = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINE) //creating board
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-count]");
const messageText = document.querySelector(".subtext");
//1. Populate a board with tiles/mines
board.forEach(row => {
    row.forEach(tile => { //2. Left click on tiles
        boardElement.append(tile.element)
        tile.element.addEventListener("click", () => {
            revealTile(board, tile);//2a. Reveal tiles
            checkGameEnd()
         })
        tile.element.addEventListener("contextmenu", e => { //3. Right click on tiles
            e.preventDefault()
            markTile(tile);//3a. Mark tiles 
            listMinesLeft()//To show how many mines left
        })
    })
});
boardElement.style.setProperty("--size", BOARD_SIZE); // setting size property (css)
minesLeftText.textContent = NUMBER_OF_MINE //showing how many mines are left 

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUS.MARKED).length
    }, 0)
    minesLeftText.textContent = NUMBER_OF_MINE - markedTilesCount
}
//4. Check for win/lose
function checkGameEnd() {
    const win = checkWin(board)
    const lose = checklose(board)
    if (win || lose) {
        boardElement.addEventListener("click", stopProp, { capture: true })
        boardElement.addEventListener("contextmenu", stopProp, {capture: true})
    }

    if (win) {
        messageText.textContent = "You Won!"
    }
    if (lose) {
        messageText.textContent = "You Lose!";
        board.forEach(row => {
            row.forEach(tile => {
                if (tile.status === TILE_STATUS.MARKED) markTile(tile)
                if (tile.mine) revealTile( board, tile)
            })
        })
    }
}

function stopProp(e) {
    e.stopImmediatePropagation()
}  

