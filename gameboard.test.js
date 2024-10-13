const Gameboard = require('./gameboard')

test('check if board is created correctly', () => {
    const gameboard = new Gameboard()
    expect(gameboard.board.length).toBe(10)
    expect(gameboard.board[4].length).toBe(10)
    expect(gameboard.board[2][3]).toBe(null)
})