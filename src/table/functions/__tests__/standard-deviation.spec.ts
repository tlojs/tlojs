import { Table } from "../../table"
import { StandardDeviation } from "../standard-deviation"

describe('Plugins', () => {
  describe('Standard Deviation', () => {

    it('should get the stdev for the rows', () => {
      const data = [
        { a: 1 },
        { a: 2 },
        { a: 1 },
        { a: 2 },
        { a: 3 },
        { a: 3 },
        { a: 3 },
      ]

      const table = new Table({ data })
      const query = table.select('A:A')

      const results = query.exec(StandardDeviation)
      const trucated = Math.floor(results * 1000) / 1000
      expect(trucated).toBe(.832)
    })

  })
})