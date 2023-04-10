
export class InvalidInputError extends Error {
  constructor(message) {
    super()
    this.message = message || "Invalid";
  }
}

const bearings = ["north", "east", "south", "west"];

const possibleMovements = {
  A: 'advance',
  R: 'turnRight',
  L: 'turnLeft',
};

export class Robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "north"
  }

  orient(bearing) {
    if (!bearings.includes(bearing)) throw new InvalidInputError(`invalid bearing: ${bearing}`);
    this.direction = bearings[bearings.indexOf(bearing)];
    return this;
  }

  get bearing() {
    return this.direction;
  }

  get coordinates() {
    return [this.x, this.y];
  }

  turnRight() {
    switch (this.direction) {
      case bearings[0]:
        this.direction = bearings[1];
        break;
      case bearings[1]:
        this.direction = bearings[2];
        break;
      case bearings[2]:
        this.direction = bearings[3];
        break;
      case bearings[3]:
        this.direction = bearings[0];
        break;
      default:
        throw new InvalidInputError('Invalid');
    }
  }

  turnLeft() {
    switch (this.direction) {
      case bearings[0]:
        this.direction = bearings[3];
        break;
      case bearings[3]:
        this.direction = bearings[2];
        break;
      case bearings[2]:
        this.direction = bearings[1];
        break;
      case bearings[1]:
        this.direction = bearings[0];
        break;
      default:
        throw new InvalidInputError('Invalid');
    }
  }

  at(x, y) {
    this.x = x;
    this.y = y;
    return [this.x, this.y];
  }

  advance() {
    switch (this.direction) {
      case bearings[0]:
        this.y += 1;
        break;
      case bearings[1]:
        this.x += 1;
        break;
      case bearings[2]:
        this.y -= 1;
        break;
      case bearings[3]:
        this.x -= 1;
        break;
      default:
        throw new InvalidInputError('Invalid');
    }
  }

  instructions(movement) {
    return Array.from(movement).map((i) => {
      if (!possibleMovements[i]) throw new InvalidInputError(`${i} is not valid instruction `);
      return possibleMovements[i];
    });
  }

  place({ x, y, direction }) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  evaluate(movement) {
    this.instructions(movement).forEach(i => this[i]());
  }
}
