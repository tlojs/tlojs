import '../cleaner'

describe('String Cleaners', () => {
  it('should remove extra white spaces', () => {
    const str = 'a     b'
    const cleansed = str.removeExtraSpaces()

    expect(cleansed).toEqual('a b')
  })  

  it('should change text to title case', () => {
    const base = 'this is a test'
    const results = base.toTitleCase()
    expect(results).toEqual('This Is A Test')
  })
})
