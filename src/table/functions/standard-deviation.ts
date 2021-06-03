import { TableCell } from "../cell";
import { TablePlugin } from "../table-plugin";

export class StandardDeviation implements TablePlugin<number> {
  execute(cells: TableCell<number>[]): number {
    const array = cells.map(x => x.value)
    const average = this.getAverage(array)

    const squareDiffs = array.map((value) => {
      var diff = value - average;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    const avgSquareDiff = this.getAverage(squareDiffs);
  
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }  

  private getAverage(array: number[]) {
    const sum = array.reduce((sum, val) => sum + val, 0)
    return sum / array.length
  }
}