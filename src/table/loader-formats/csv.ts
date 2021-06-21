import { GenericObject } from "../../types/type";
import { TableLoader } from "../loader";
import { Table } from "../table";

export class CsvLoader<T> implements TableLoader<T, string> {
  load(data: string): Table<T> {
    const blank = new Table<T>({ data: [] })
    if (!data) {
      return blank
    }

    const cleansed = data.replace(/\r/, '')
    const rows = cleansed.split('\n')
    if (rows.length === 0) {
      return blank
    }
    const headers = rows[0].split(',')
    const grid: T[] = []
    
    // Remove header row
    rows.splice(0, 1)

    for (const row of rows) {
      const cells = row.split(',')
      
      // Create object from cells
      const o: GenericObject = {}
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        o[headers[i]] = this.parseCell(cell.trim())
      }

      grid.push(o as T)
    }

    return new Table<any>({ data: grid })
  }

  private parseCell(data: any) {
    const num = Number(data)
    if (!isNaN(num)) {
      return num
    }

    return data
  }
}