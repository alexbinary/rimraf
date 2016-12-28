# rimraf

Promisified version of rimraf 🙀

## Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/rimraf.git

$ yarn add https://github.com/alexbinary/rimraf.git
```

## Usage

```javascript
let rimraf = require('@alexbinary/rimraf')

// promise
rimraf('/foo/bar').then(() => {
  console.log('file deleted')
})

// callback
rimraf('/foo/bar', (err) => {
  if (!err) {
    console.log('file deleted')
  }
})

// sync
rimraf.sync('/foo/bar')
console.log('file deleted')
```

## Licence

MIT
