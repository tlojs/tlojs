import { Table } from "../table";

export class TableRenderer<T> {

  private ele: HTMLElement | undefined;

  constructor(private table: Table<T>) {

  }

  renderTo(domElement?: HTMLElement) {
    if (!domElement) {
      return;
    }

    this.ele = domElement
    this.ele.classList.add('tlo-table')
    this.drawHeaders()
    this.drawBody()
  }

  private drawBody() {
    const body = document.createElement('tbody')

    for (const row of this.table.rows) {
      const tr = document.createElement('tr')
      
      for (const cell of row.cells) {
        const td = document.createElement('td')
        td.innerText = cell.value + ''
        tr.appendChild(td)
      }

      body.appendChild(tr)
    }

    this.ele?.appendChild(body)
  }

  private drawHeaders() {
    const headers = this.table.getHeaders()
    const headEle = document.createElement('thead')

    for (const header of headers) {
      const ele = document.createElement('th')
      ele.innerText = header
      headEle.appendChild(ele)
    }

    this.ele?.appendChild(headEle)
  }
}