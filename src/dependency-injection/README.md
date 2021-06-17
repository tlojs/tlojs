# Dependency Injection for Typescript

## Usage
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