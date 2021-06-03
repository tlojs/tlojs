import { JsonQuery } from "../query";

describe('Json', () => {
  describe('Query', () => {
    
    it('should select top level key', () => {
      const json = { a: 1, b: 2 }
      const jsonQuery = new JsonQuery(json);
      const results = jsonQuery.query<{ b: number }>({
        $key: {
          $gt: 1
        }
      })

      expect(results.b).toEqual(2)
    })

  })
})