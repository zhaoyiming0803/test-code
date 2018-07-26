;(function () {

    var url = 'http://www.zymseo.com/user?name=123&password=456';

    var a = encodeURIComponent(url);
    var b = encodeURI(url);

    console.log(a);
    console.log(b);


    console.log(decodeURIComponent(a));

})();