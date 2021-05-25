"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Walk_1 = require("./Walk");
describe("Avid", () => {
    test("Should starts with zero valley", () => {
        const walk = new Walk_1.Walk();
        expect(walk.countValleys()).toBe(0);
    });
    test("Should one valley on UDDDUDUU walk", () => {
        const steps = "UDDDUDUU".split("");
        const walk = new Walk_1.Walk();
        for (let direction of steps) {
            walk.to(direction);
        }
        expect(walk.countValleys()).toBe(4);
    });
});
