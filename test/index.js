
let chai = require('chai')
let expect = chai.expect
chai.use(require('chai-fs'))

let fsSandbox = require('alexbinary.fs-sandbox')
fsSandbox.setRoot(__dirname)

let rimraf = require('./../src/index')

describe('rimraf', function () {
  it('promise', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let file = sandbox.touchpSync('foo/bar')
    // ## TEST
    rimraf(file.fullpath).then(() => {
      // ## Assert
      expect(file.fullpath).to.not.be.a.path()
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
      expect(file.fullpath).to.not.be.a.path()
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
    expect(file.fullpath).to.not.be.a.path()
    // ## Teardown
    fsSandbox.rmSync()
    // ## End
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
