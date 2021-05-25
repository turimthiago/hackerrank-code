import { walkUpBindingElementsAndPatterns } from "typescript";
import { Walk } from "./Walk";

describe("Avid", () => {
  test("Should starts with zero valley", () => {
    const walk = new Walk();

    expect(walk.countValleys()).toBe(0);
  });

  test("Should one valley on UDDDUDUU walk", () => {
    const steps = "UDDDUDUU".split("");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(1);
  });
});
