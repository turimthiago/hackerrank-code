"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.Walk = void 0;
class Walk {
    constructor() {
        this.steps = [];
    }
    to(direction) {
        this.steps.push(direction);
    }
    countValleys() {
        let valleys = 0;
        let seaLevel = 0;
        for (let stepDirection of this.steps) {
            if (stepDirection === Direction.UP) {
                seaLevel++;
            }
            else if (stepDirection === Direction.DOWN) {
                seaLevel--;
            }
            if (this.exitedValley(seaLevel, stepDirection)) {
                valleys++;
            }
        }
        return valleys;
    }
    exitedValley(seaLevel, stepDirection) {
        return seaLevel === 0 && stepDirection === Direction.UP;
    }
}
exports.Walk = Walk;
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
})(Direction = exports.Direction || (exports.Direction = {}));
