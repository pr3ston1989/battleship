const Gameboard = require('./gameboard')
const Ship = require('./ship')

test('check if board is created correctly', () => {
    const gameboard = new Gameboard()
    expect(gameboard.board.length).toBe(10)
    expect(gameboard.board[4].length).toBe(10)
    expect(gameboard.board[2][3]).toBe(null)
})

test('check if ship was placed', () => {
    const gameboard = new Gameboard()
    expect(gameboard.placeShip(2, 'horizontal', 1, 3)).toBe(gameboard.board)
    expect(gameboard.board[1][3]).toBeInstanceOf(Ship)
    expect(gameboard.board[2][3]).toBeInstanceOf(Ship)
    expect(gameboard.board[3][3]).toBeNull()
})

test('check if attack is working', () => {
    const gameboard = new Gameboard()
    expect(gameboard.receiveAttack(1, 1)).toBe('x')
    gameboard.placeShip(2, 'horizontal', 1, 1)
    expect(gameboard.receiveAttack(1, 1)).toBeInstanceOf(Ship)
    expect(gameboard.receiveAttack(2, 1).hits).toBe(2)
    expect(gameboard.receiveAttack(11, 12)).toBeUndefined()
})

test('checking sunk status', () => {
    const gameboard = new Gameboard()
    gameboard.placeShip(2, 'horizontal', 1, 1)
    gameboard.placeShip(4, 'vertical', 3, 3)
    gameboard.placeShip(1, 'horizontal', 7, 8)
    expect(gameboard.isAllSunk()).toBe(false)
    gameboard.ships[0].hits = 2
    gameboard.ships[1].hits = 4
    gameboard.ships[2].hits = 1
    expect(gameboard.isAllSunk()).toBe(true)
})