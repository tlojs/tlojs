import { hashtagParser } from '../hashtags'

describe('Mentions', () => {
  it('should parse and return a single at mention', () => {
    const expected = 'test253_22'
    const results = hashtagParser('This is a test #' + expected)
    expect(results).toHaveLength(1)
    expect(results[0]).toEqual(expected)
  })

  it('should be able to parse multiple mentions', () => {
    const expected = ['test287_2', 'ablkjs_23_u2']
    const results = hashtagParser(`this is a test #${expected[0]} #${expected[1]}`)
    expect(results).toHaveLength(2)
    expect(results).toEqual(expected)
  })
})
