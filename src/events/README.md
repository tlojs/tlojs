# Events 
There are two concepts, the event and the event hub. Custom event hubs can be created or the default global event hub will be used.

## Usage
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