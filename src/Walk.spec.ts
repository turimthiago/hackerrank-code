import { Direction, Walk } from "./Walk";

describe("Walk", () => {
  test("Should starts with zero valley", () => {
    const walk = new Walk();

    expect(walk.countValleys()).toBe(0);
  });

  test("Should one valley on UDDDUDUU walk", () => {
    const steps = convertLetterToDirection("UDDDUDUU");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(1);
  });

  test("Should one valley on DDUUUUDD walk", () => {
    const steps = convertLetterToDirection("DDUUUUDD");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(1);
  });

  test("Should one valley on DDUUDDUDUUUD walk", () => {
    const steps = convertLetterToDirection("DDUUDDUDUUUD");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(2);
  });

  test("Should one valley on DUDDDUUDUU walk", () => {
    const steps = convertLetterToDirection("DUDDDUUDUU");

    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(2);
  });

  test("Should one valley on DDUUUDDDUUUDDDUUUDDU walk", () => {
    const steps = convertLetterToDirection("DDUUUDDDUUUDDDUUUDDU");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(4);
  });

  function convertLetterToDirection(letters: string): Direction[] {
    return letters
      .split("")
      .map((i) => (i === "D" ? Direction.DOWN : Direction.UP));
  }
});
