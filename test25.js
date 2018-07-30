;(function (window, document) {

    var resizeCall = (function () {
        var width = 750;
        var docEle = document.documentElement;
        var clientWidth = docEle.clientWidth;
        docEle.style.fontSize = clientWidth / width * 100 + 'px';
        return arguments.callee;
    })();

    window.addEventListener('resize', resizeCall, false);

})(this, document);