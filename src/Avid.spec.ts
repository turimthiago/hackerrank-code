import { walkUpBindingElementsAndPatterns } from "typescript";
import { Walk } from "./Walk";

describe("Avid", () => {
  test("Should starts with zero valley", () => {
    const walk = new Walk();

    expect(walk.countValleys()).toBe(0);
  });
});
