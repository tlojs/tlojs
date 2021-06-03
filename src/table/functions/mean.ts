import { TableCell } from "../cell";
import { TablePlugin } from "../table-plugin";

export class Mean implements TablePlugin<number> {
  execute(cells: TableCell<unknown>[]): number {
    let results = 0;

    cells
      .select(x => x.value as number)
      .map(x => results += x)

    return results / cells.length;
  }
  
}