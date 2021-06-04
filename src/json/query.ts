declare type JSONQueryGreaterThan = {
  $gt: number;
};
declare type JSONQueryGreaterThanOrEquals = {
  $gte: number
};

declare type JSONQueryValue = JSONQueryGreaterThan | JSONQueryGreaterThanOrEquals

export declare type JSONQuery = {
  $key?: JSONQueryValue
}

export class JsonQuery {
  constructor(
    private json: {[key: string]: any}
  ) {

  }

  query<T = object>(query: JSONQuery): T {
    const obj = {}

    if (query.$key) {
      return this.anyKeyWith(query.$key)
    }

    return obj as T
  }

  private anyKeyWith<T>(query: JSONQueryValue): T {
    const obj: {[key: string]: any} = {}

    const keys = Object.keys(this.json)
    for (const key of keys) {
      const val = this.json[key]
      if (!isNaN(Number(val))) {
        if ((query as JSONQueryGreaterThan).$gt) {
          const gtVal = (query as JSONQueryGreaterThan).$gt
          if (val > gtVal) {
            obj[key] = val
          }
        } else if ((query as JSONQueryGreaterThanOrEquals).$gte) {
          const gtVal = (query as JSONQueryGreaterThanOrEquals).$gte
          if (val >= gtVal) {
            obj[key] = val
          }
        }
      }
    }

    return obj as T
  }
}