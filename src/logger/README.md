# Logger
Logger is a common interface with a few simple implementations

## Ignore Logger
Ignore logger can be used to simply ignore any logs. This is useful in CI/CD pipelines

## Console Logger
Ignore logger implements the same interface, but outputs to the console.

## Usage
```typescript
@Injectable()
class Example {
  constructor(private logger: ConsoleLogger) {
    // Outputs to the console
    this.logger.info('Example')
  }
}

@Injectable()
class Example {
  constructor(private logger: IgnoreLogger) {
    // Ignores output
    this.logger.info('Example')
  }
}
```