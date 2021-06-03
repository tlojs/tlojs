import { Table } from "../../table"
import { Mean } from "../mean"

describe('Plugins', () => {
  describe('Mean', () => {

    it('should average the rows', () => {
      const data = [
        { a: 2, b: 2},
        { a: 2, b: 2}
      ]

      const table = new Table({ data })
      const query = table.select('A:B')

      const results = query.exec(Mean)
      expect(results).toBe(2)
    })

  })
})