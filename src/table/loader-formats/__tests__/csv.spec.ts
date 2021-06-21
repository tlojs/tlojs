import { Table } from '../../table'
import { CsvLoader } from '../csv'
import { JsonExport } from '../../export-formats/json'

describe('Export Table', () => {
  describe('Export CSV', () => {

    it('should import table as single column csv', () => {
      const expected = [
        { a: 1},
        { a: 1},
        { a: 2},
        { a: 1}
      ]
      const data = 'a\r\n1\r\n1\r\n2\r\n1'
      const table = Table.load(CsvLoader, data)

      const exported = table.export(JsonExport)
      expect(exported).toEqual(expected)
    })

    it('should import table as multiple column csv', () => {
      const expected = [
        { a: 1, b: 1},
        { a: 1, b: 1},
        { a: 2, b: 1},
        { a: 1, b: 1}
      ]
      const data = 'a,b\r\n1,1\r\n1,1\r\n2,1\r\n1,1'
      const table = Table.load(CsvLoader, data)

      const exported = table.export(JsonExport)
      expect(exported).toEqual(expected)
    })

  })
})