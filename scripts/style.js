const sass = require("sass");
const glob = require("glob")
const path = require('path')
const fs = require('fs')

const dir = path.resolve(__dirname, '../src');
const output = path.resolve(__dirname, '../dist/styles')

fs.mkdirSync(output, { recursive: true })

glob(dir + '/**/*.scss', function (err, files) {
  for (const file of files) {
    sass.render({
      file,
    }, function(err, result) {
      fs.writeFileSync(output + '/' + path.parse(file).name + '.css', result.css)
    });
  }
})