import { Injectable } from "../dependency-injection"

export interface ILogger {
  debug(msg: string, data: any[]): void
  info(msg: string, data: any[]): void
  warn(msg: string, data: any[]): void
  error(msg: string, error: any, data: any[]): void
}

@Injectable()
export class IgnoreLogger implements ILogger {
  debug(msg: string, data: any[]): void {
    // Ignore 
  }
  
  info(msg: string, data: any[]): void {
    // Ignore 
  }
  
  warn(msg: string, data: any[]): void {
    // Ignore 
  }
  
  error(msg: string, error: any, data: any[]): void {
    // Ignore 
  }
}

@Injectable()
export class ConsoleLogger implements ILogger {
  debug(msg: string, data: any[]): void {
    if (data) {
      console.log(msg, data) 
    } else {
      console.log(msg) 
    }
  }
  info(msg: string, data: any[]): void {
    if (data) {
      console.log(msg, data) 
    } else {
      console.log(msg) 
    }
  }
  warn(msg: string, data: any[]): void {
    if (data) {
      console.warn(msg, data) 
    } else {
      console.log(msg) 
    }
  }
  error(msg: string, error: any, data: any[]): void {
    if (data) {
      console.error(msg, error, data) 
    } else {
      console.log(msg) 
    }
  }

}