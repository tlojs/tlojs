const EMPTY_ARRAY = 'The array is empty'

export {}

declare global {
  interface Array<T> {
    select<K>(callback: (item: T) => K): Array<K>;
    where(callback: (item: T) => boolean): Array<T>;
    distinct(): Array<T>;
    first(): T
    firstOrDefault(): T | undefined
    last(): T
    lastOrDefault(): T | undefined
    
    min(): number
    max(): number
  }
}

Array.prototype.select = function<T, K>(callback: (item: T) => K) {
  return this.map(callback);
}

Array.prototype.min = function() {
  return Math.min(...this)
}

Array.prototype.max = function() {
  return Math.max(...this)
}

Array.prototype.where = function<T>(callback: (item: T) => boolean) {
  return this.filter(callback);
}

Array.prototype.distinct = function() {
  return this.filter((value, index, self) => self.indexOf(value) === index);
}

Array.prototype.first = function() {
  const first = this.firstOrDefault()
  if (!first) {
    throw new Error(EMPTY_ARRAY)
  }

  return first
}

Array.prototype.firstOrDefault = function() {
  if (this.length > 0) {
    return this[0]
  }

  return undefined
}

Array.prototype.last = function() {
  const last = this.lastOrDefault()
  if (!last) {
    throw new Error(EMPTY_ARRAY)
  }

  return last
}

Array.prototype.lastOrDefault = function() {
  if (this.length > 0) {
    return this[this.length - 1]
  }

  return undefined
}
