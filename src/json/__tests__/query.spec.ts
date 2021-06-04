import { JsonQuery } from "../query";

describe('Json', () => {
  describe('Query', () => {
    
    it('should select top level key using gt', () => {
      const json = { a: 1, b: 2 }
      const jsonQuery = new JsonQuery(json);
      const results = jsonQuery.query<{ b: number }>({
        $key: {
          $gt: 1
        }
      })

      expect(results.b).toEqual(2)
    })

    it('should select top level key using gte', () => {
      const json = { a: 1, b: 2, c: 3 }
      const jsonQuery = new JsonQuery(json);
      const results = jsonQuery.query<{ b: number, c: number }>({
        $key: {
          $gt: 1
        }
      })

      expect(results.b).toEqual(2)
      expect(results.c).toEqual(3)
    })

    it('should select nothing using gt', () => {
      const json = { a: 1, b: 2 }
      const jsonQuery = new JsonQuery(json);
      const results = jsonQuery.query<{}>({
        $key: {
          $gt: 3
        }
      })

      expect(Object.keys(results)).toHaveLength(0)
    })

    it('should select nothing using gte', () => {
      const json = { a: 1, b: 2 }
      const jsonQuery = new JsonQuery(json);
      const results = jsonQuery.query<{}>({
        $key: {
          $gte: 3
        }
      })

      expect(Object.keys(results)).toHaveLength(0)
    })
  })
})