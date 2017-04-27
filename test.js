const { expect } = require('chai')
const taskFromFn = require('./index')

describe('taskFromFn', () => {
  it('Returns the nodeback data after conversion to a task', done => {
    const fn = (str, str2, cb) => cb(null, str + str2 + 'processed');
    const convertedFn = taskFromFn(fn);
    const task = convertedFn('test', '-was-');
    task.fork(
      Function.prototype,
      value => {
        expect(value).to.eql('test-was-processed')
        done()
      }
    )
  });

  it('Returns the nodeback error after conversion to a task', done => {
    const error = 'failed';
    const fn = (str, cb) => cb(error, '');
    const convertedFn = taskFromFn(fn);
    const task = convertedFn('test');
    task.fork(
      e => {
        expect(e).to.eql(error)
        done()
      },
      Function.prototype
    )
  });
});
