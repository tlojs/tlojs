import { TableExport } from "../export";
import { Table } from "../table";
import { GenericObject } from '../../types/type'

export class JsonExport<T> implements TableExport<T, GenericObject[]> {
  export(table: Table<T>): GenericObject[] {
    const results = table.rows.select(x => {
      const o: GenericObject = {}
      for (const cell of x.cells) {
        o[cell.key] = cell.value
      }
      return o;
    })

    return results
  }
}