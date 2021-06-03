import { Table } from "../../table"
import { Count } from "../count"

describe('Plugins', () => {
  describe('Count', () => {

    it('should count the cells', () => {
      const data = [
        { a: 1, b: 2},
        { a: 1, b: 2}
      ]

      const table = new Table({ data })
      const query = table.select('A:B')

      const results = query.exec(Count)
      expect(results).toBe(4)
    })

    it('should be able to handle large datasets of 10000', () => {
      const data = [
        { a: 1, b: 2 }
      ]

      for (let i = 0; i < 10000; i++) {
        data.push({ a: i + 2, b: i + 3 })
      }

      const table = new Table({ data })
      expect(table.rows).toHaveLength(10001)
    })
  })
})