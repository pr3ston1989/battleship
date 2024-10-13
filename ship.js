class Ship {
    constructor(length) {
        this.length = length
        this.sunk = false
        this.hits = 0
    }

    hit() {
        this.hits = this.hits < this.length ? this.hits + 1 : this.hits
        return this.hits
    }

    isSunk() {
        this.sunk = this.length === this.hits
        return this.sunk
    }
}

module.exports = Ship