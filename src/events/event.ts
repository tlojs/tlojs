import { Type } from "../types/type"

type EventCallback = (e: BaseEvent) => void

export class EventHub {

  private registered: {[key: string]: EventCallback[]} = {}
  
  /**
   * Dispatches a an event to any listeners. If no listeners exist, the event will be ignored
   * @param event EventBase
   */
  dispatch(event: BaseEvent) {
    const callbacks = this.registered[event.name]
    if (callbacks) {
      for (let i = 0; i < callbacks.length; i++) {
        const callback = callbacks[i]
        try {
          callback(event);
        } catch (ex: any) {
          console.error(`Unable to dispatch ${event.name} because ${ex}`, ex)
        }
      }
    }
  }

  /**
   * Register a callback to an event type
   * @param eventType 
   * @param callback 
   * @returns 
   */
  register(eventType: Type<BaseEvent>, callback: EventCallback) {
    const instance = new eventType()
    const name = instance.name
    if (!this.registered[name]) {
      this.registered[name] = []
    }

    this.registered[name].push(callback)
    return new EventRegistration(eventType, callback, this)
  }

  /**
   * Unregister a callback from an event type
   * @param eventType 
   * @param callback 
   * @returns 
   */
  unregister(eventType: Type<BaseEvent>, callback: EventCallback) {
    const instance = new eventType()
    const name = instance.name
    if (!this.registered[name]) {
      return;
    }

    const foundIndex = this.registered[name].indexOf(callback)
    if (foundIndex > -1) {
      this.registered[name].splice(foundIndex, 1)
    }
  }
}

/**
 * The global event hub
 */
export const GlobalEventHub = new EventHub()

export abstract class BaseEvent {

  public globalHub = GlobalEventHub
  public abstract name: string;

  constructor(
    public data?: any
  ) { }

  /**
   * Any inherited class can easily dispatch to the global event hub
   */
  dispatch() {
    this.globalHub.dispatch(this)
  }
}

class EventRegistration {
  constructor(
    private eventType: Type<BaseEvent>, 
    private callback: EventCallback, 
    private eventHub: EventHub
  ) {

  }

  /**
   * Easy shortcut to unregister an event
   */
  unsubscribe() {
    this.eventHub.unregister(this.eventType, this.callback)
  }
}