# TLO.js (The Last One)
TLO.js is the last npm package that you'll have to install. With little to no sub dependencies The goal of this repo is to jam pack it full of 
handy functions, functionality, etc to get the job done.

## Sub Libraries
* [Array]('https://github.com/tlojs/tlojs/blob/master/src/array/README.md')
* [Dependency Injection]('https://github.com/tlojs/tlojs/blob/master/src/dependency-injection/README.md')
* [JSON]('https://github.com/tlojs/tlojs/blob/master/src/json/README.md')
* [Table]('https://github.com/tlojs/tlojs/blob/master/src/table/README.md')
* [Events]('https://github.com/tlojs/tlojs/blob/master/src/events/README.md')
* [Logger]('https://github.com/tlojs/tlojs/blob/master/src/logger/README.md')
* [String]('https://github.com/tlojs/tlojs/blob/master/src/string/README.md')


## Examples
### Table Usage
```typescript
const data = [
  { a: 1, b: 2},
  { a: -1, b: 3}
]

const table = new Table({ data })
table.sort(0, true)
const query = table.select('A:B')

const results = query.exec(Sum)

// Render the table
const renderer = new TableRenderer(table)
renderer.renderTo(document.getElementById('data'))

// Or load the table from a CSV
const csv = `
a,b,c
1,1,1
2,2,2
3,3,3
`;

const table = Table.load(CsvLoader, csv)
```

### Dependency Injection Usage
```typescript

@Injectable()
class A {
  getNumber() { return 1 }
}

@Injectable()
class B {
  constructor(public a: A) {

  }
}

const service = Injector.resolve<B>(B)

```

### Event and Event Hub Usage
```typescript

// Define the custom event
class TestEvent extends BaseEvent {
  name = 'Test'
}

// Create a new instance of the event
const ev = new TestEvent()

// Listen to the event
GlobalEventHub.register(TestEvent, (e) => console.log(e))

// Dispatch the event
ev.dispatch()

```