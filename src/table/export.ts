import { Table } from "./table";

export interface TableExport<T, K> {
  export(table: Table<T>): K
}