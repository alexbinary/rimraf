
let chai = require('chai')
let expect = chai.expect
chai.use(require('chai-fs'))

let fsSandbox = require('alexbinary.fs-sandbox')
fsSandbox.setRoot(__dirname)

let rimraf = require('./../src/index')

describe('rimraf', function () {
  describe('file', function () {
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
  })
  describe('dir', function () {
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      let dir = sandbox.mkdirpSync('foo/bar')
      sandbox.touchpSync('foo/bar/foo.txt')
      // ## TEST
      rimraf(dir.fullpath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(dir.fullpath).to.not.be.a.path()
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      let dir = sandbox.mkdirpSync('foo/bar')
      sandbox.touchpSync('foo/bar/foo.txt')
      // ## TEST
      rimraf(dir.fullpath).then(() => {
        // ## Assert
        expect(dir.fullpath).to.not.be.a.path()
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('sync', function () {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      let dir = sandbox.mkdirpSync('foo/bar')
      sandbox.touchpSync('foo/bar/foo.txt')
      // ## TEST
      rimraf.sync(dir.fullpath)
      // ## Assert
      expect(dir.fullpath).to.not.be.a.path()
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
    })
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
