import { Table } from "../table"

describe('Table', () => {
  describe('Query', () => {

    it('should return a single column', () => {
      const data = [
        { a: 1, b: 2},
        { a: 1, b: 2}
      ]

      const table = new Table({ data })
      const results = table.select('B:B')
      expect(results.cells.length).toEqual(2)
    })

    it('should return a two columns', () => {
      const data = [
        { a: 1, b: 2},
        { a: 1, b: 2}
      ]

      const table = new Table({ data })
      const results = table.select('A:B')
      expect(results.cells.length).toEqual(4)
    })

  })
})