import { Table } from '../../table'
import { CsvExport } from '../csv'

describe('Export Table', () => {
  describe('Export CSV', () => {

    it('should export the table as CSV', () => {
      const data = [
        { a: 1},
        { a: 1},
        { a: 2},
        { a: 1}
      ]

      const table = new Table({ data })
      const results = table.export(CsvExport)
      const expected = 'a\r\n1\r\n1\r\n2\r\n1'
      expect(results).toEqual(expected)
    })

  })
})