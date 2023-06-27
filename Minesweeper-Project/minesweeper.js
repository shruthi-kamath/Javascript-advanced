//Logic of game

const TILE_STATUS = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked"
}
//1. Populate a board with tiles/mines
export  function createBoard(boardSize, numberOfMines) {
    const board = []
    const minePositions = getMinePositions(boardSize, numberOfMines)
    console.log(minePositions)

    for (let x = 0; x < boardSize; x++){
        const row = [] //creating a row for every x
        for (let y = 0; y < boardSize; y++){
            const element = document.createElement('div'); //creating element to display
            element.dataset.status = TILE_STATUS.HIDDEN

            const tile = { //creating a tile
                element,
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null,{x,y})),
                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                },
            }
            row.push(tile)
        }
        board.push(row) // adding row to board
    }
    return board
}

function getMinePositions(boardSize, numberOfMines) {
    const positions = []

    while (positions.length < numberOfMines) {
        const position = {
          x: randomNumber(boardSize),
          y: randomNumber(boardSize)
        }

        if (!positions,some(positionMatch.bind(null, position))) {
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