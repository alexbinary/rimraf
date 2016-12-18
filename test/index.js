
let expect = require('chai').expect

let fsSandbox = require('alexbinary.fs-sandbox')
let fileexists = require('alexbinary.file-exists')

let rimraf = require('./../src/index')

fsSandbox.setRoot(__dirname)

describe('rimraf', function () {
  it('promise', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let file = sandbox.touchpSync('foo/bar')
    // ## TEST
    rimraf(file.fullpath).then(() => {
      // ## Assert
      expect(fileexists.sync(file.fullpath)).to.be.false
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
    }).then(() => done()).catch(done)
  })
  it('callback', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let file = sandbox.touchpSync('foo/bar')
    // ## TEST
    rimraf(file.fullpath, (err) => {
      // ## Assert
      expect(err).to.be.null
      expect(fileexists.sync(file.fullpath)).to.be.false
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
      done()
    })
  })
  it('sync', function () {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let file = sandbox.touchpSync('foo/bar')
    // ## TEST
    rimraf.sync(file.fullpath)
    // ## Assert
    expect(fileexists.sync(file.fullpath)).to.be.false
    // ## Teardown
    fsSandbox.rmSync()
    // ## End
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
