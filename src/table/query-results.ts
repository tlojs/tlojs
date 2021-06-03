import { TableCell } from "./cell";
import '../array/linq'
import { TablePlugin } from "./table-plugin";
import { Type } from "../types/type";

export class TableQueryResults {
  constructor(
    public cells: TableCell<unknown>[]
  ) { }

  exec<T>(plugin: Type<TablePlugin<T>>): T {
    const instance = new plugin()
    return instance.execute(this.cells)
  }
}