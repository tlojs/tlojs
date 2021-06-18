import { GenericObject } from "../../types/type";
import { TableExport } from "../export";
import { Table } from "../table";

export class CsvExport<T> implements TableExport<T, string> {
  export(table: Table<T>): string {
    const items = table.rows.select(x => {
      const o: GenericObject = {}
      for (const cell of x.cells) {
        o[cell.key] = cell.value
      }

      return o;
    })
    const headers = table.getHeaders()

    const csv = [
      headers.join(','), // header row first
      ...items.map(row => headers.map(fieldName => JSON.stringify(row[fieldName])).join(','))
    ]

    return csv.join('\r\n')
  }
}