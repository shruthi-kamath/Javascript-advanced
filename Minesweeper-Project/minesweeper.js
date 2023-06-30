//Logic of game

export const TILE_STATUS = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
}
//1. Populate a board with tiles/mines
export function createBoard(boardSize, numberOfMines) { //how big board is and how many mine are on the board
    const board = [] //board is array of arrays , by default its empty
    const minePositions = getMinePositions(boardSize, numberOfMines)

    for (let x = 0; x < boardSize; x++) {
        const row = [] //creating a row for every x
        for (let y = 0; y < boardSize; y++) { //since board is square using boardSize for both sides
            const element = document.createElement('div'); //creating element to display
            element.dataset.status = TILE_STATUS.HIDDEN //by default it should be hidden
            const tile = { //creating a new tile which has x and y property
                element,
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null, {x, y})),
                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                },
            }
            row.push(tile) // adding tile to the row
        }
        board.push(row) // adding row to board
    }
    return board
}

export function markTile(tile) {
    if (tile.status !== TILE_STATUS.HIDDEN && tile.status !== TILE_STATUS.MARKED) {
        return 
    }

    if (tile.status === TILE_STATUS.MARKED) {
        tile.status = TILE_STATUS.HIDDEN
    } else {
        tile.status = TILE_STATUS.MARKED
    }
}

export function revealTile(board, tile) {
    if (tile.status !== TILE_STATUS.HIDDEN) {
        return 
    }

    if (tile.mine) {
        tile.status = TILE_STATUS.MINE
        return
    }
    tile.status = TILE_STATUS.NUMBER
    const adjacentTiles = nearbyTiles(board, tile)
    const mines = adjacentTiles.filter(t => t.mine)
    if (mines.length === 0) {
        adjacentTiles.forEach(revealTile.bind(null, board))
    } else {
        tile.element.textContent = mines.length
    }
}

export function checkWin(board) {
    return board.every(row => {
        return row.every(tile => {
            return (
                tile
                    .status === TILE_STATUS.NUMBER ||
                (tile.mine &&
                    (tile.status === TILE_STATUS.HIDDEN ||
                        tile.status === TILE_STATUS.MARKED))
            )
        })
    });
}

export function checklose(board) {
    return board.some(row => {
        return row.some(tile => {
            return tile.status === TILE_STATUS.MINE
        })
    })
}


function getMinePositions(boardSize, numberOfMines) {
    const positions = []

    while (positions.length < numberOfMines) {
        const position = {
          x: randomNumber(boardSize),
          y: randomNumber(boardSize)
        }
        if (!positions.some(positionMatch.bind(null, position))) {
            positions.push(position)
        }
    }
    return positions
}

function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y
}

function randomNumber(size) {
    return Math.floor(Math.random() * size)
}

function nearbyTiles(board, {x, y}) {
    const tiles = []
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile = board[x + xOffset]?.[y + yOffset];
            if (tile) {
                tiles.push(tile);
            }
        }
    }         
    return tiles;
}