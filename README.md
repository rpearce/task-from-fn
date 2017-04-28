_NOTE: this library's functionality has now been implemented in Folktale: [https://origamitower.github.io/folktale/api/en/folktale.data.task.fromnodeback.html](https://origamitower.github.io/folktale/api/en/folktale.data.task.fromnodeback.html)_

# task-from-fn

![](https://img.shields.io/npm/dm/task-from-fn.svg)
![](https://img.shields.io/npm/v/task-from-fn.svg)

Convert a JavaScript function with node-style callback in to a Task from the [data.task](https://www.npmjs.com/package/data.task) package.

# Usage
```js
const taskFromFn = require('task-from-fn')
const fs = require('fs')

const readFile = taskFromFn(fs.readFile)
const task = readFile('path/to/file', 'utf-8')

task.fork(
  e => console.error(e), // handle error
  data => console.log(data) // handle file data
)
```
