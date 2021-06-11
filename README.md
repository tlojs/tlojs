# TLO.js (The Last One)
TLO.js is the last npm package that you'll have to install. The goal of this repo is to jam pack it full of 
handy functions, functionality, etc to get the job done.

## Sub Libraries
* [Array]('./src/array/README.md')
* [Dependency Injection]('./src/dependency-injection/README.md')
* [JSON]('./src/json/README.md')
* [Table]('./src/table/README.md')


## Examples
### Table Usage
```typescript
const data = [
  { a: 1, b: 2},
  { a: -1, b: 3}
]

const table = new Table({ data })
const query = table.select('A:B')

const results = query.exec(Sum)
```