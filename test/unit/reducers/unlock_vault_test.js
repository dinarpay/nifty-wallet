// var jsdom = require('mocha-jsdom')
const assert = require('assert')
// var freeze = require('deep-freeze-strict')
const sinon = require('sinon')

const actions = require('../../../ui/app/actions')
const reducers = require('../../../ui/app/reducers')

describe('#unlockMetamask(selectedAccount)', function () {
  beforeEach(function () {
    // sinon allows stubbing methods that are easily verified
    this.sinon = sinon.createSandbox()
  })

  afterEach(function () {
    // sinon requires cleanup otherwise it will overwrite context
    this.sinon.restore()
  })

  describe('after an error', function () {
    it('clears warning', function () {
      const warning = 'this is the wrong warning'
      const account = 'foo_account'
      const initialState = {
        appState: {
          warning: warning,
        },
      }

      const resultState = reducers(initialState, actions.unlockMetamask(account))
      assert.equal(resultState.appState.warning, null, 'warning nullified')
    })
  })

  describe('going home after an error', function () {
    it('clears warning', function () {
      const warning = 'this is the wrong warning'
      // const account = 'foo_account'
      const initialState = {
        appState: {
          warning: warning,
        },
      }

      const resultState = reducers(initialState, actions.goHome())
      assert.equal(resultState.appState.warning, null, 'warning nullified')
    })
  })
})
