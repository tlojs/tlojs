export class TableCell<T> {
  constructor(
    public key: string,
    public value: T
  ) {
  }

  static fromData<T>(data: T): TableCell<keyof T>[] {
    const cellNames: string[] = Object.keys(data)
    return cellNames.map(x => {
      const val = (data as any)[x];
      return new TableCell(x, val)
    })
  }
}