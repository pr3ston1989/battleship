const Ship = require('./ship')

class Gameboard {
    constructor(size = 10) {
        this.size = size
        this.board = this.createBoard()
    }

    createBoard() {
        const board = []
        for (let i = 0; i < this.size; i++) {
            board.push([])
            for (let j = 0; j < this.size; j++) {
                board[i].push(null)
            }
        }
        return board
    }

    placeShip(size, orientation, x, y) {
        const ship = new Ship(size)
        if (this.isFieldAvailable(size, orientation, x, y)) {
            if (orientation === 'horizontal') {
                for (let i = x; i < x+size; i++) {
                    this.board[i][y] = ship
                }
            } else if (orientation === 'vertical') {
                for (let i = y; i < y+size; i++) {
                    this.board[x][i] = ship
                }
            }
        }
        return this.board
    }

    isFieldAvailable(size, orientation, x, y) {
        let flag = true
        if (orientation === 'horizontal') {
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
        } else if (orientation === 'vertical') {
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

    receiveAttack(x, y) {
        let shot = this.board[x][y]
        if ((x > 0 && x < this.size) && (y > 0 && y < this.size)) {
            if (shot === null) {
                shot = 'x'
            } else {
                shot.hit()
            }
        }
        return shot
    }
}

module.exports = Gameboard