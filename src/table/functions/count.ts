import { TableCell } from "../cell";
import { TablePlugin } from "../table-plugin";

export class Count implements TablePlugin<number> {
  execute(cells: TableCell<unknown>[]) {
    return cells.length
  }
}