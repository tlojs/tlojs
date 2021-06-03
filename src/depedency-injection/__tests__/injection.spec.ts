import { Injector, Injectable } from "../injection"

describe('Depedency Injection', () => {
  it('should inject', () => {
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
    expect(service).toBeTruthy()
    expect(service.a).toBeTruthy()
    expect(service.a.getNumber()).toEqual(1)
  })
})