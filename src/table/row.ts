import { TableCell } from "./cell"
import { INVALID_COLUMN_INDEX } from "./exceptions";

export class TableRow<T> {

  cells: TableCell<keyof T>[]

  constructor(
    public data: T
  ) {
    this.cells = TableCell.fromData(data)
  }

  getCol(idx: number) {
    if (this.cells.length <= idx) {
      throw new Error(INVALID_COLUMN_INDEX)
    }
    return this.cells[idx];
  }

  destroy() {
    this.cells = []
  }
  
  static fromData<T>(data: T[]): TableRow<T>[] {
    return data.map(x => new TableRow(x))
  }
}