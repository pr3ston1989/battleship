const Gameboard = require('./gameboard')

class Player {
    constructor(name = 'Computer') {
        this.name = name
        this.board = new Gameboard()
    }
}

module.exports = Player