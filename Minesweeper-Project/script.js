//Display/UI

import { electron } from "webpack";
import {
    TILE_STATUSES,
    createBoard,
    markTile,
    revealTile,
    checkWin,
    checklose
} from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMBER_OF_MINE = 10;

let board = createBoard(BOARD_SIZE, NUMBER_OF_MINE) //creating board
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-count]");
const messageText = document.querySelector(".subtext");

function render() {
    boardElement.innerHTML = ""
    checkGameEnd();
    
    getTileElements().forEach(element => {
        boardElement.append(element)
    })
    listMinesLeft();
}

function getTileElements() {
    return board.flatMap(row => {
        return row.map(tileToElement)
    })
}

function tileToElement(tile) {
    const element = document.createElement("div"); //creating element to display
    element.dataset.status = tile.status
    element.dataset.x = tile.x
    element.dataset.y = tile.y
    element.textContent = tile.adjacentMinesCount || ""
    return element
}

boardElement.addEventListener("click", e => {
    if (!e.target.matches("[data-status]")) return

    revealTile(
      board,
      board[parseInt(e.target.dataset.x)][parseInt(e.target.dataset.y)]
    );
    render();
})

boardElement.addEventListener("contextmenu", e => {
    if (!e.target.matches("[data-status]")) return;

    e.preventDefault();
    board = markTile(
        board,
        {
            x: parseInt(e.target.dataset.x),
            y: parseInt(e.target.dataset.y)
        }
    );
    render();
});


boardElement.style.setProperty("--size", BOARD_SIZE); // setting size property (css)
render()
minesLeftText.textContent = NUMBER_OF_MINE //showing how many mines are left 

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
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
                if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
                if (tile.mine) revealTile( board, tile)
            })
        })
    }
}

function stopProp(e) {
    e.stopImmediatePropagation()
}  

