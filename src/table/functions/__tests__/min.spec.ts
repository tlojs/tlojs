import { Table } from "../../table"
import { Min } from "../min"

describe('Plugins', () => {
  describe('Min', () => {

    it('should min of the the cells', () => {
      const data = [
        { a: 1, b: 2},
        { a: 1, b: 2}
      ]

      const table = new Table({ data })
      const query = table.select('A:B')

      const results = query.exec(Min)
      expect(results).toBe(1)
    })

    it('should give the min in a bunch of cells', () => {
      const data = [
        { a: 1, b: 2, c: 3 },
        { a: 1, b: -1, c: 3 },
        { a: 1, b: 2, c: 3 },
        { a: 1, b: 2, c: 3 }
      ]

      const table = new Table({ data })
      const query = table.select('A:C')

      const results = query.exec(Min)
      expect(results).toBe(-1)
    })
  })
})