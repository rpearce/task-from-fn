'use strict'

const Task = require('data.task')

function taskFromFn(fn, ctx) {
  return function() {
    var args = [].slice.call(arguments)

    return new Task(function(reject, resolve) {
      fn.apply(ctx,
        args.concat(function(err, data) {
          err ? reject(err) : resolve(data)
        })
      )
    })
  }
}

module.exports = taskFromFn
