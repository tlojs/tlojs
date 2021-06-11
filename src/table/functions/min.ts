import { TableCell } from "../cell";
import { TablePlugin } from "../table-plugin";

export class Min implements TablePlugin<number> {
  name = 'min'

  execute(cells: TableCell<unknown>[]): number {
    return cells
      .select(x => x.value as number)
      .min()
  }
}