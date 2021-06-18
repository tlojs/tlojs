import { BaseEvent, GlobalEventHub } from '../event'

describe("Events", () => {

  class TestEvent extends BaseEvent {
    name = 'Test'
  }
  
  it('should register an event', () => {
    const ev = new TestEvent('Test')
    expect(ev.globalHub).toBeTruthy()
  })

  it('should dispatch an event to the global hub', () => {
    const ev = new TestEvent()
    const spy = jest.spyOn(ev.globalHub, 'dispatch');

    ev.dispatch()
    expect(spy).toHaveBeenCalled()
  })

  it('should call my callback', () => {
    const ev = new TestEvent()
    const callback = jest.fn()
    GlobalEventHub.register(TestEvent, callback);
    ev.dispatch()

    expect(callback.mock.calls).toHaveLength(1)
  })

  it('should be able to handle thousands of events', () => {
    const callback = jest.fn()
    GlobalEventHub.register(TestEvent, callback);
    const dispatches = 1000;

    for (let i = 0; i < dispatches; i++) {
      const ev = new TestEvent()
      ev.dispatch()
    }
    expect(callback.mock.calls).toHaveLength(dispatches)
  })

  it('should unsubscribe from listening to the event', () => {
    const callback = jest.fn()
    const sub = GlobalEventHub.register(TestEvent, callback);
    const dispatches = 100;

    for (let i = 0; i < dispatches; i++) {
      const ev = new TestEvent()
      ev.dispatch()
      sub.unsubscribe()
    }
    expect(callback.mock.calls).toHaveLength(1)
  })
})