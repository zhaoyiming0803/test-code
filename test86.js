;(function () {

  var a = 0;
  var b = a++;
  console.log(a); // 1
  console.log(b); // 0

  console.log('-------');

  for (var i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log('-------');

  var c = 0;
  c++;
  console.log(c);

})();