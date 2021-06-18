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
}
