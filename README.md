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
let rimraf = require('alexbinary.rimraf')

rimraf('/foo/bar').then(() => {
  console.log('file deleted')
})
```

## Licence

MIT
