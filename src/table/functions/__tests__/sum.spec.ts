import { Table } from "../../table"
import { Sum } from "../sum"

describe('Plugins', () => {
  describe('Sum', () => {

    it('should sum the rows', () => {
      const data = [
        { a: 1, b: 2},
        { a: 1, b: 2}
      ]

      const table = new Table({ data })
      const query = table.select('A:B')

      const results = query.exec(Sum)
      expect(results).toBe(6)
    })

    it('should be able to sum large data', () => {
      const data = []

      let value = 0;
      for (let i = 0; i < 10000; i++) {
        value += i
        data.push({ a: i })
      }

      const table = new Table({ data })
      const query = table.select('A:A')

      const results = query.exec(Sum)
      expect(results).toBe(value)
    })
  })
})