
let rimraf = require('rimraf')
let promisify = require('alexbinary.promisify')

let myrimraf = promisify(rimraf)
myrimraf.sync = rimraf.sync

module.exports = myrimraf
