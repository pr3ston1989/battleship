const Ship = require('./ship')

test('create ship with correct length and initial values', () => {
    const ship = new Ship(4)
    expect(ship.length).toBe(4)
    expect(ship.sunk).toBe(false)
    expect(ship.hits).toBe(0)
})

test('check if "hits" value is updating', () => {
    const ship = new Ship(3)
    expect(ship.hit()).toBe(1)
    expect(ship.hits).toBe(1)
    expect(ship.hit()).toBe(2)
    expect(ship.hits).toBe(2)
})

test('check if "sunk" value is set properly', () => {
    const ship = new Ship(1)
    expect(ship.isSunk()).toBe(false)
    ship.hit()
    expect(ship.isSunk()).toBe(true)
    expect(ship.sunk).toBe(true)
})