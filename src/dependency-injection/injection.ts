import 'reflect-metadata';
import { Type } from '../types/type';

export type GenericClassDecorator<T> = (target: T) => void;

export const Injectable = () : GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
  };
};

export const Injector = new class {
  // resolving instances
  resolve<T>(target: Type<any>): T {
    // tokens are required dependencies, while injections are resolved tokens from the Injector
    let tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    let injections = tokens.map((token: any) => Injector.resolve<any>(token));

    const instance = new target(...injections);
    return instance;
  }
};