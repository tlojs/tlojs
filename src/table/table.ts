import { Type } from "../types/type"
import { TableExport } from "./export"
import { TableQuery, TableQueryReference } from "./query"
import { TableRow } from "./row"

export interface TableOptions<T> {
  data: T[]
}

export class Table<T> {

  rows: TableRow<T>[]

  constructor(
    public options: TableOptions<T>
  ) {
    this.rows = TableRow.fromData(options.data)
  }

  /**
   * Select a range in an excel-like manner and return a query of the table
   * @param range 
   * @returns 
   */
  select(range: TableQueryReference) {
    const query = new TableQuery(range, this.rows)
    return query.exec()
  }

  /**
   * Empty the data from the table
   */
  clear() {
    this.rows.forEach(x => x.destroy())
    this.rows = []
  }

  /**
   * Get a list of the headers
   * @returns string[]
   */
  getHeaders() {
    const firstRow = this.rows.firstOrDefault();
    const cells = firstRow?.cells ?? []
    return cells.select(x => x.key)
  }

  /**
   * Sort the table by a column index
   * @param columnIndex 
   * @param descending 
   */
  sort(columnIndex: number, descending?: boolean) {
    this.rows.sort((a, b) => {
      let aValue: any = undefined;
      let bValue: any = undefined;
      if (a.cells.length > columnIndex) {
        aValue = a.cells[columnIndex].value
      }

      if (b.cells.length > columnIndex) {
        bValue = b.cells[columnIndex].value
      }

      if (aValue > bValue) {
        return descending ? -1 : 1;
      }
      if (aValue < bValue) {
        return descending ? 1 : -1;
      }

      return 0;
    })
  }

  /**
   * Export the table
   * @param exporter 
   * @returns 
   */
  export<K>(exporter: Type<TableExport<T, K>>) {
    const instance = new exporter()
    return instance.export(this)
  }
}
