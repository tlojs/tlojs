import { Type } from "../types/type"

type EventCallback = (e: BaseEvent) => void

export class EventHub {

  private registered: {[key: string]: EventCallback[]} = {}
  
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

  register(eventType: Type<BaseEvent>, callback: EventCallback) {
    const instance = new eventType()
    const name = instance.name
    if (!this.registered[name]) {
      this.registered[name] = []
    }

    this.registered[name].push(callback)
  }
}

export const GlobalEventHub = new EventHub()

export abstract class BaseEvent {

  public globalHub = GlobalEventHub
  public abstract name: string;

  constructor(
    public data?: any
  ) { }

  dispatch() {
    this.globalHub.dispatch(this)
  }
}