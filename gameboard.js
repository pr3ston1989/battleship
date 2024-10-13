const Ship = require('./ship')

class Gameboard {
    constructor() {
        this.board = this.createBoard()
    }

    createBoard() {
        const board = []
        for (let i = 0; i < 10; i++) {
            board.push([])
            for (let j = 0; j < 10; j++) {
                board[i].push(null)
            }
        }
        return board
    }

    placeShip(size, orientation, x, y) {
        const ship = new Ship(size)
        console.log(this.isFieldAvailable(size, orientation, x, y))
        if (this.isFieldAvailable(size, orientation, x, y)) {
            if (orientation === 'vertical') {
                for (let i = x; i < x+size; i++) {
                    this.board[i][y] = ship
                }
            } else if (orientation === 'horizontal') {
                for (let i = y; i < y+size; i++) {
                    this.board[x][i] = ship
                }
            }
        }
    }

    isFieldAvailable(size, orientation, x, y) {
        let flag = true
        if (orientation === 'vertical') {
            for (let i = x; i < x+size; i++) {
                if (i < 0 || i >= this.board.length || y < 0 || y >= this.board.length) {
                    flag = false;
                    return flag
                }
                if (this.board[i][y] !== null
                    || (i > 0 && this.board[i-1][y] !== null)
                    || (i < this.board.length && this.board[i+1][y] !== null)
                    || (y > 0 && this.board[i][y-1] !== null)
                    || (y < this.board.length && this.board[i][y+1] !== null)
                 ) {
                    flag = false
                    return flag
                 }
            }
        } else if (orientation === 'horizontal') {
            for (let i = y; i < y+size; i++) {
                if (i < 0 || i >= this.board.length || x < 0 || x >= this.board.length) {
                    flag = false;
                    return flag
                }
                if (this.board[x][i] !== null
                    || (i > 0 && this.board[y][i-1] !== null)
                    || (i < this.board.length && this.board[y][i+1] !== null)
                    || (y > 0 && this.board[x-1][i] !== null)
                    || (y < this.board.length && this.board[x+1][i] !== null)
                ) {
                    flag = false
                    return flag
                }
            }
        }

        return flag
    }
}

module.exports = Gameboard