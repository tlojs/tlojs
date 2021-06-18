# Table
Simple, lightweight, excel-like table with a code first approach

## Supported Functions on the table
- Sum
- Mean
- Count
- Standard Deviation
- Min
- Max

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

## Render the table
```typescript
const renderer = new TableRenderer(table)
renderer.renderTo(document.getElementById('data'))
```

## Table Functions
| Name | Description |
|---|---|
| sort(columnIndex: number, descending?: boolean) | Sort a table by the index of the column |
| getHeaders() | Get a string array of the headers |
| clear() | Clear the table's data |
| select(range: string) | Get a selection using excel-like syntax (e.g. A:A or B1:C1) |