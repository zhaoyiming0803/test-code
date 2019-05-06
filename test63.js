;(function () {

  var a = 10;
  var b = 20;
  
  var c = a--;
  var d = b-=1;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log('-----');

  var e = 3;
  // while (e--) {
  //   console.log(e);
  // }
  while (e) {
    e -= 1;
    console.log(e);
  }

})();