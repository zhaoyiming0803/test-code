;(function () {

  class Person {
    constructor (uname) {
      this._uname = uname;
    }

    get uname () {
      console.log('get uname');
      return this._uname;
    }

    set uname (uname) {
      console.log('set uname');
      this._uname = uname;
    }
  }

  const p = new Person('zhangsan');

  console.log(p.uname);
  p.uname = 'lisi';
  console.log(p.uname);

})();