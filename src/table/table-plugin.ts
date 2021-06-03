import { TableCell } from "./cell";

export interface TablePlugin<T> {
  execute(cells: TableCell<unknown>[]): T
}