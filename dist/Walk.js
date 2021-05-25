"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walk = void 0;
class Walk {
    constructor() {
        this.steps = [];
    }
    sequence(...steps) {
        this.steps.concat(steps);
    }
    countValleys() {
        let valleys = 0;
        return valleys;
    }
}
exports.Walk = Walk;
