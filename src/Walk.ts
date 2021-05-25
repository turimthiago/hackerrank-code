export class Walk {
  steps: string[] = [];
  to(direction: string): void {
    this.steps.push(direction);
  }

  countValleys(): number {
    let valleys = 0;

    let seaLevel = 0;
    for (let step of this.steps) {
      if (step === "U") {
        seaLevel++;
      } else if (step === "D") {
        seaLevel--;
      }

      if (seaLevel === 0 && step === "U") {
        valleys++;
      }
    }

    return valleys;
  }
}
