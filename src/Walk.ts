export class Walk {
  steps: Direction[] = [];
  
  to(direction: Direction): void {
    this.steps.push(direction);
  }

  countValleys(): number {
    let valleys = 0;
    let seaLevel = 0;
    for (let stepDirection of this.steps) {
      if (stepDirection === Direction.UP) {
        seaLevel++;
      } else if (stepDirection === Direction.DOWN) {
        seaLevel--;
      }
      if (this.exitedValley(seaLevel, stepDirection)) {
        valleys++;
      }
    }
    return valleys;
  }

  private exitedValley(seaLevel: number, stepDirection: Direction): boolean {
    return seaLevel === 0 && stepDirection === Direction.UP;
  }
}

export enum Direction {
  UP,
  DOWN,
}
