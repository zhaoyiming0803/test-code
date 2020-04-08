(function () {
  const num = 123454321;

  function isPalindrome(num) {
    const numToStr = num + "";
    return numToStr === numToStr.split("").reverse().join("");
  }

  console.log(isPalindrome(num));
})();

(function () {
  const num = 12344321;

  function isPalindrome(num) {
    const numToStr = num + "";
    let start = 0;
    let end = numToStr.length - 1;
    while (start < end) {
      if (numToStr[start] !== numToStr[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  console.log(isPalindrome(num));
})();

(function () {
  function isPalindrome(num) {
    const numToStr = num + "";
    const totalLength = numToStr.length;
    const len = Math.ceil(totalLength - 1);
    for (let i = 0; i < len; i++) {
      if (numToStr[i] !== numToStr[totalLength - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  console.log(isPalindrome(1234564321));
  console.log(isPalindrome(123454321));
})();
