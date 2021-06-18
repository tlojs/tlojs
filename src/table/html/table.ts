import { Table } from "../table";

export class TableRenderer<T> {

  private ele: HTMLElement | undefined;
  private body: HTMLElement | undefined;

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

  private clear() {
     if (this.body) {
      this.body.parentElement?.removeChild(this.body)
     }
  }

  private drawBody() {
    const body = document.createElement('tbody')
    this.body = body

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

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]
      const ele = document.createElement('th')
      ele.innerText = header
      ele.onclick = () => {
        const attr = ele.getAttribute('ascending')
        const isAscending = attr === 'true'
        ele.setAttribute('ascending', !isAscending + '')
        this.table.sort(i, !isAscending)
        this.clear()
        this.drawBody()
      }
      headEle.appendChild(ele)
    }

    this.ele?.appendChild(headEle)
  }
}