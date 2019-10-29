;(function () {

  var fork = require('child_process').fork;
  var cpus = require('os').cpus();

  // for (var i = 0; i < cpus.length; i++) {
  //   fork('./worker.js');
  // }

  fork('./worker.js')
    .on('message', data => {
      console.log(data);
    })
    .send({ message: 'hello Node.js' });

})();