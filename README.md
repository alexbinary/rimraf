# rimraf

Simple rimraf with promise support 🎉

[![npm](https://img.shields.io/npm/v/@alexbinary/rimraf.svg)](https://www.npmjs.com/package/@alexbinary/rimraf)
[![GitHub release](https://img.shields.io/github/release/alexbinary/rimraf.svg?label="github")](https://github.com/alexbinary/rimraf/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/rimraf.svg)](https://travis-ci.org/alexbinary/rimraf)
[![dependencies Status](https://david-dm.org/alexbinary/rimraf/status.svg)](https://david-dm.org/alexbinary/rimraf)
[![devDependencies Status](https://david-dm.org/alexbinary/rimraf/dev-status.svg)](https://david-dm.org/alexbinary/rimraf?type=dev)

Based on [rimraf](https://www.npmjs.com/package/rimraf) by [isaacs](https://www.npmjs.com/~isaacs)

Uses [@alexbinary/promisify](https://www.npmjs.com/package/@alexbinary/promisify) by [alexbinary](https://www.npmjs.com/~alexbinary)

## Install

Install using npm or yarn :

```bash
$ npm install @alexbinary/rimraf
# or
$ yarn add @alexbinary/rimraf
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

This method supports both Promise and node callback style, and resolves with no arguments.

### rimraf.sync(filepath)

Synchronous version.

## Licence

MIT
