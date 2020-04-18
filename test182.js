(function () {
  var a = null;
  var b;
  var c = "";
  console.log(a == b); // true
  console.log(a == 0); // false
  console.log(b == 0); // false
  console.log(a == false); // false
  console.log(b == undefined); // true
  console.log(a == undefined); // true
  console.log(c == a); // false
})();
