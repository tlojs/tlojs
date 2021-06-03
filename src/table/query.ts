import { TableCell } from "./cell"
import { INVALID_RANGE_REFERENCE } from "./exceptions"
import { TableQueryResults } from "./query-results"
import { TableRow } from "./row"

export type CellReference =`${string}${number | ''}`
export type CellRangeReference =`${CellReference}:${CellReference}`
export type TableQueryReference = CellReference | CellRangeReference

type QueryReference = {
  col: number;
  row?: number;
  isFullCol: boolean
  isLastRow?: boolean;
}

export class TableQuery<T> {

  private start?: QueryReference
  private end?: QueryReference

  constructor(
    public query: TableQueryReference,
    private rows: TableRow<T>[]
  ) {
    this.parse()
  }

  exec(): TableQueryResults {
    if (!this.start) {
      return new TableQueryResults([])
    }

    const start: QueryReference = this.start
    let selected: TableCell<unknown>[] = []

    if (this.start.isFullCol) {
      const cells = this.rows.map(x => x.getCol(start.col))
      selected = selected.concat(cells)
    }

    if (this.end?.isFullCol && start.isFullCol) {
      const end = this.end
      const totalCols = end.col - start.col

      let spot = 0
      
      while (spot < totalCols && totalCols > 0) {
        const cells = this.rows.map(x => x.getCol(start.col + spot + 1))
        selected = selected.concat(cells)
        spot++;
      }
    }

    return new TableQueryResults(selected)
  }

  private parse() {

    if (!this.query) {
      throw new Error(INVALID_RANGE_REFERENCE)
    }

    if (this.query.includes(':')) {
      const split = this.query.split(':')
      const start = split[0] as CellReference
      const end = split[1] as CellReference
      this.start = this.parseCellReference(start)
      this.end = this.parseCellReference(end)
      this.end.isLastRow = true
    } else {
      const start = this.query as CellReference
      this.start = this.parseCellReference(start)
    }

  }

  private parseCellReference(ref: CellReference, ): QueryReference {
    if (!ref) {
      throw new Error(INVALID_RANGE_REFERENCE)
    }

    const results: QueryReference = {
      col: 0,
      row: undefined,
      isFullCol: true
    }

    const startIndex = 'A'.charCodeAt(0);

    const split = ref.toUpperCase().split('')
    const colCode = split[0].charCodeAt(0)

    results.col = colCode - startIndex

    if (split.length > 1) {
      const num = Number(split[1])
      if (isNaN(num)) {
        throw new Error(INVALID_RANGE_REFERENCE)
      }

      results.row = num
    }

    results.isFullCol = typeof results.row !== 'number'

    return results
  }
}