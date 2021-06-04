# JSON

## JSON Query
```typescript
const json = { a: 1, b: 2 }
const jsonQuery = new JsonQuery(json);
const results = jsonQuery.query<{}>({
  $key: {
    $gt: 1
  }
})

// results: {b: 2}
```