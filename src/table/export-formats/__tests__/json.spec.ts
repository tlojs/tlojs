import { Table } from '../../table'
import { JsonExport } from '../json'

describe('Export Table', () => {
  describe('Export Json', () => {

    it('should export the table as JSON', () => {
      const data = [
        { a: 1},
        { a: 1},
        { a: 2},
        { a: 1}
      ]

      const table = new Table({ data })
      const results = table.export(JsonExport)

      expect(results).toEqual(data)
    })

  })
})