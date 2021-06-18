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

  select(range: TableQueryReference) {
    const query = new TableQuery(range, this.rows)
    return query.exec()
  }

  clear() {
    this.rows.forEach(x => x.destroy())
    this.rows = []
  }

  getHeaders() {
    const firstRow = this.rows.firstOrDefault();
    const cells = firstRow?.cells ?? []
    return cells.select(x => x.key)
  }

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
}
