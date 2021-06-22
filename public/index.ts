import { Table, TableRenderer } from '../src'

const cols = ['A', 'B', 'C', 'D', 'E', 'F']
const rows = 100

const data = []

for (let i = 0; i < rows; i++) {
  const row = {}
  for (const col of cols) {
    row['Column ' + col] = i * Math.ceil((Math.random() * 100))
  }
  data.push(row)
}

const table = new Table({ data })
const renderer = new TableRenderer(table)
renderer.renderTo(document.getElementById('data'))