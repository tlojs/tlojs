# TLO.js (The Last One)
TLO.js is the last npm package that you'll have to install. With little to no sub dependencies The goal of this repo is to jam pack it full of 
handy functions, functionality, etc to get the job done.

## Sub Libraries
* [Array]('./src/array/README.md')
* [Dependency Injection]('./src/dependency-injection/README.md')
* [JSON]('./src/json/README.md')
* [Table]('./src/table/README.md')
* [Events]('./src/events/README.md')


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

// Render the table
const renderer = new TableRenderer(table)
renderer.renderTo(document.getElementById('data'))
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