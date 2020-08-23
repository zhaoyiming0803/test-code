;(function () {

  const url = 'https://www.baidu.com?a=1&b=2&c=3'
  const $url = encodeURIComponent(encodeURIComponent(encodeURIComponent(url)))

  function getUrl ($url) {
    // const url = decodeURIComponent($url)
    // if ($url !== url) {
    //   return getUrl(url)
    // }
    // return url

    let url = decodeURIComponent($url)
    while (url !== decodeURIComponent(url)) {
      url = decodeURIComponent(url)
    }
    return url
  }

  console.log(getUrl($url))

})();