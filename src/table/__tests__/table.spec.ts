import { Table } from ".."

describe('Table', () => {
  describe('Rows', () => {

    it('should generate rows', () => {
      const data = [
        { a: 1, b: 1},
        { a: 2, b: 2},
        { a: 3, b: 3}
      ]

      const table = new Table({ data })

      expect(table.rows).toHaveLength(data.length)
    })

    it('should have cells', () => {
      const data = [
        { a: 1, b: 2}
      ]

      const table = new Table({ data })

      const row = table.rows[0]
      expect(row.cells).toHaveLength(2)
      expect(row.cells[0].key).toBe('a')
      expect(row.cells[0].value).toBe(1)
      expect(row.cells[1].key).toBe('b')
      expect(row.cells[1].value).toBe(2)
    })

    it('should be an empty table', () => {
      const data: Array<{}> = []
      const table = new Table({ data })
      expect(table.rows).toHaveLength(0)
    })
    
    it('should handle complex object', () => {
      const data = [
        { a: 1, b: { a: 1 } },
        { a: 2, b: { a: 1 } },
        { a: 3, b: { a: 1 } }
      ]

      const table = new Table({ data })
      expect(table.rows).toHaveLength(data.length)
    })

    it('should clear the table', () => {
      const data = [
        { a: 1, b: { a: 1 } },
        { a: 2, b: { a: 1 } },
        { a: 3, b: { a: 1 } }
      ]

      const table = new Table({ data })
      expect(table.rows).toHaveLength(data.length)
      table.clear()
      expect(table.rows).toHaveLength(0)
    })

    it('should return an array of headers', () => {
      const data = [
        { a: 1, b: { a: 1 } },
      ]

      const table = new Table({ data })
      const headers = table.getHeaders()
      expect(headers).toEqual(['a', 'b'])
    })
  })
})