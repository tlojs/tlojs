import '../linq'

describe('Array Linq', () => {
  describe('Select', () => {

    it('should create a new object', () => {
      const obj1 = {a: 1}
      const obj2 = {a: 2}
      const ary = [obj1, obj2]
      const results = ary.select(x => x.a)
      expect(results).toStrictEqual([1, 2])
    })

  })

  describe('Where', () => {
    it('should filter out negatives', () => {
      const obj1 = {a: 1}
      const obj2 = {a: 2}
      const ary = [obj1, obj2]
      const evens = ary.where(x => x.a % 2 === 0)
      expect(evens).toStrictEqual([obj2])
    })
  })

  describe('Distinct', () => {
    it('should filter out non-distinct values', () => {
      const ary = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
      const distinct = ary.distinct()
      expect(distinct).toStrictEqual([1, 2, 3])
    })
  })

  describe('First', () => {
    it('should give me the first item in the array', () => {
      const ary = [1, 2]
      const first = ary.first()
      expect(first).toEqual(1)
    })

    it('should throw an exception if its empty', () => {
      const ary: number[] = []
      expect(ary.first).toThrowError()
    })
  })

  describe('FirstOrDefault', () => {
    it('should give me the first item in the array', () => {
      const ary = [1, 2]
      const first = ary.firstOrDefault()
      expect(first).toEqual(1)
    })

    it('should throw an exception if its empty', () => {
      const ary: number[] = []
      const first = ary.firstOrDefault()
      expect(first).toBeUndefined()
    })
  })

  describe('Last', () => {
    it('should give me the last item in the array', () => {
      const ary = [1, 2]
      const first = ary.last()
      expect(first).toEqual(2)
    })

    it('should throw an exception if its empty', () => {
      const ary: number[] = []
      expect(ary.last).toThrowError()
    })
  })

  describe('LastOrDefault', () => {
    it('should give me the last item in the array', () => {
      const ary = [1, 2]
      const first = ary.lastOrDefault()
      expect(first).toEqual(2)
    })

    it('should throw an exception if its empty', () => {
      const ary: number[] = []
      const first = ary.lastOrDefault()
      expect(first).toBeUndefined()
    })
  })

  describe('min', () => {
    it('should give the min', () => {
      const ary = [1, 2, 3, 4]
      const min = ary.min()
      expect(ary[0]).toBe(min)
    })
  })

  describe('max', () => {
    it('should give the max', () => {
      const ary = [1, 2, 3, 4]
      const max = ary.max()
      expect(ary[3]).toBe(max)
    })
  })
})
