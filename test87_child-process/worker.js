;(function () {

  process.on('message', data => {
    console.log(data);
    process.send({ message: 'hello, i am child_process' });
  });

})();