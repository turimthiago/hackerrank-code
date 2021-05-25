export class Walk {
  steps: string[] = [];
  sequence(...steps: string[]): void {
    this.steps.concat(steps);
  }

  countValleys(): number {
    let valleys = 0;

    return valleys;
  }
}
