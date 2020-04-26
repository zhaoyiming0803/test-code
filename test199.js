(function () {
  var a = 0;
  var b = a == 0 || a++ || 3;
  console.log(a); // 0
  console.log(b); // true

  var c = 0;
  var d = c == 1 || c++ || 3;
  console.log(c); // 1
  console.log(d); // 3

  var e = 0;
  var f = e == 1 || ++e || 3;
  console.log(e); // 1
  console.log(f); // 2

  var g = 0;
  var h = g == 1 && g++ && 3;
  console.log(g); // 0
  console.log(h); // false

  var i = 0;
  var j = i == 0 && ++i && 3;
  console.log(i); // 1
  console.log(j); // 3

  var k = 0;
  var l = k == 0 && ++k && k++;
  console.log(k); // 2
  console.log(l); // 1
})();
