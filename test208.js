~(function () {
  function compiler(code) {
    if (/var\s+/.test(code)) {
      code.replace(
        /(var)\s+([a-zA-Z].*)\s*=\s*(\d+|\'\w+\')/g,
        ($0, $1, $2, $3) => {
          console.log($0);
          console.log($1);
          console.log($2);
          console.log($3);
        }
      );
    } else if (/>/.test(code)) {
      code.replace(/([a-zA-z].*)\s*(>|>=)\s*(\d+)/, ($0, $1, $2, $3) => {
        console.log($0);
        console.log($1);
        console.log($2);
        console.log($3);
      });
    } else if (/\+|\-|\*|\//.test(code)) {
      code.replace(/(\d+)\s*([\+\-\*\/])?\s*/g, ($0, $1, $2) => {
        console.log($1);
      });
    }
  }

  console.log(compiler("var a= 123"));
  console.log("-----");
  console.log(compiler("age >= 18"));
  console.log("-----");
  console.log(compiler("1 + 2 * 3"));
})();
