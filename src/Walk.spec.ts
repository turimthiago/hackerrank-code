import { Walk } from "./Walk";

describe("Walk", () => {
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

  test("Should one valley on DDUUUUDD walk", () => {
    const steps = "DDUUUUDD".split("");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(1);
  });

  test("Should one valley on DDUUDDUDUUUD walk", () => {
    const steps = "DDUUDDUDUUUD".split("");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(2);
  });

  test("Should one valley on DUDDDUUDUU walk", () => {
    const steps = "DUDDDUUDUU".split("");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(2);
  });

  test("Should one valley on DDUUUDDDUUUDDDUUUDDU walk", () => {
    const steps = "DDUUUDDDUUUDDDUUUDDU".split("");
    const walk = new Walk();
    for (let direction of steps) {
      walk.to(direction);
    }

    expect(walk.countValleys()).toBe(4);
  });
});
