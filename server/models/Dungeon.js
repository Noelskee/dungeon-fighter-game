// Dungeon.js
class Dungeon {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    describe() {
        return `Dungeon Name: ${this.name}, Size: ${this.size}`;
    }
}

module.exports = Dungeon;