;(function () {

   function diviceBy2 (num) {
       var arr = [];
       var str = '';
       var rem = 0;

       while (num > 0) {
            rem = num % 2;
            arr.push(rem);
            num = Math.floor(num / 2);
       }

       return arr.reverse().join('');
   }

   console.log(diviceBy2(100));

})();