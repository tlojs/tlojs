# Table
Simple, lightweight, excel-like table with a code first approach

## Usage
```typescript
const data = [
  { a: 1, b: 2},
  { a: 1, b: 2}
]

const table = new Table({ data })
const query = table.select('A:B')

const results = query.exec(Sum)
```