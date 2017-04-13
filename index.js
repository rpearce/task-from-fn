function taskFromFn(fn, ctx) {
  return function() {
    var args = [].slice.call(arguments)

    return new Task((reject, resolve) => {
      fn.apply(ctx,
        args.concat(
          (err, data) => err ? reject(err) : resolve(data)
        )
      )
    })
  }
}

module.exports = taskFromFn
