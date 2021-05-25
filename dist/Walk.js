"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walk = void 0;
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
        for (let step of this.steps) {
            if (step === "U") {
                seaLevel++;
            }
            else if (step === "D") {
                seaLevel--;
            }
            if (seaLevel === 0 && step === "U") {
                valleys++;
            }
        }
        return valleys;
    }
}
exports.Walk = Walk;
