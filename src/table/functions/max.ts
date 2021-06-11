import { TableCell } from "../cell";
import { TablePlugin } from "../table-plugin";

export class Max implements TablePlugin<number> {
  name = 'max'

  execute(cells: TableCell<unknown>[]): number {
    return cells
      .select(x => x.value as number)
      .max()
  }
}