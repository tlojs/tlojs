import { Table } from "./table";

export interface TableLoader<T, K> {
  load(data: K): Table<T>
}