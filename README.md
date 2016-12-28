# rimraf

Simple rimraf with promise support 🎉

[![npm](https://img.shields.io/npm/v/@alexbinary/rimraf.svg)](https://www.npmjs.com/package/@alexbinary/rimraf)
[![GitHub release](https://img.shields.io/github/release/alexbinary/rimraf.svg?label="github")](https://github.com/alexbinary/rimraf/releases/latest)

Based on [rimraf](https://www.npmjs.com/package/rimraf) by [isaacs](https://www.npmjs.com/~isaacs)

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

## Documentation

```javascript
let rimraf = require('@alexbinary/rimraf')
```

### rimraf(filepath[, callback])

Removes the file or directory at `filepath`.
If `filepath` is a directory then the directory is removed with all its content.

This method supports both Promise and node callback style.

### rimraf.sync(filepath)

Synchronous version.

## Licence

MIT
