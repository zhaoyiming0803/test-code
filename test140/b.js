let { person, count } = require('./a')
person.age = 19
count += 1
// { person: { name: 'zhaoyiming', age: 19 }, count: 0 }
console.log(require('./a'))