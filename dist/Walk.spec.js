"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Walk_1 = require("./Walk");
describe("Walk", () => {
    test("Should starts with zero valley", () => {
        const walk = new Walk_1.Walk();
        expect(walk.countValleys()).toBe(0);
    });
    test("Should one valley on UDDDUDUU walk", () => {
        const steps = convertLetterToDirection("UDDDUDUU");
        const walk = new Walk_1.Walk();
        for (let direction of steps) {
            walk.to(direction);
        }
        expect(walk.countValleys()).toBe(1);
    });
    test("Should one valley on DDUUUUDD walk", () => {
        const steps = convertLetterToDirection("DDUUUUDD");
        const walk = new Walk_1.Walk();
        for (let direction of steps) {
            walk.to(direction);
        }
        expect(walk.countValleys()).toBe(1);
    });
    test("Should one valley on DDUUDDUDUUUD walk", () => {
        const steps = convertLetterToDirection("DDUUDDUDUUUD");
        const walk = new Walk_1.Walk();
        for (let direction of steps) {
            walk.to(direction);
        }
        expect(walk.countValleys()).toBe(2);
    });
    test("Should one valley on DUDDDUUDUU walk", () => {
        const steps = convertLetterToDirection("DUDDDUUDUU");
        const walk = new Walk_1.Walk();
        for (let direction of steps) {
            walk.to(direction);
        }
        expect(walk.countValleys()).toBe(2);
    });
    test("Should one valley on DDUUUDDDUUUDDDUUUDDU walk", () => {
        const steps = convertLetterToDirection("DDUUUDDDUUUDDDUUUDDU");
        const walk = new Walk_1.Walk();
        for (let direction of steps) {
            walk.to(direction);
        }
        expect(walk.countValleys()).toBe(4);
    });
    function convertLetterToDirection(letters) {
        return letters
            .split("")
            .map((i) => (i === "D" ? Walk_1.Direction.DOWN : Walk_1.Direction.UP));
    }
});
