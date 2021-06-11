import { Table } from "../../table"
import { Max } from "../max"

describe('Plugins', () => {
  describe('Max', () => {

    it('should give the max of the cells', () => {
      const data = [
        { a: 1, b: 2},
        { a: 1, b: 2}
      ]

      const table = new Table({ data })
      const query = table.select('A:B')

      const results = query.exec(Max)
      expect(results).toBe(2)
    })

    it('should give the max in a bunch of cells', () => {
      const data = [
        { a: 1, b: 2, c: 3 },
        { a: 1, b: 4, c: 3 },
        { a: 1, b: 2, c: 3 },
        { a: 1, b: 2, c: 3 }
      ]

      const table = new Table({ data })
      const query = table.select('A:C')

      const results = query.exec(Max)
      expect(results).toBe(4)
    })
  })
})