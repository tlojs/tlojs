import { TableCell } from "../cell";
import { TablePlugin } from "../table-plugin";

export class Sum implements TablePlugin<number> {
  name = 'sum'

  execute(cells: TableCell<unknown>[]) {
    let results = 0
    cells
      .select(x => x.value as number)
      .map(x => results += x)

    return results
  }
}