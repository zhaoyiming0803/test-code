;(function () {

  // jquery serialize params
  // https://github.com/jquery/jquery/blob/master/src/serialize.js

  interface AddFunc {
    (key: string | number, val: any): void
  }

  function isPlainObject (field: any): boolean {
    return Object.prototype.toString.call(field) === '[object Object]';
  }

  function buildURL(url: string, params: any): string {
    const hashIndex = url.indexOf('#');
    if (hashIndex > -1) {
      url = url.substring(0, hashIndex);
    }

    if (!isPlainObject(params)) {
      return url;
    }

    const serializedParams: string[] = [];

    const add: AddFunc = (key: string | number, val: any): void => {
      val = typeof val === 'function'
        ? val()
        : val;
      const serializedParam = encodeURIComponent(key)
        + '='
        + (!val ? '' : encodeURIComponent(val));
      serializedParams.push(serializedParam);
    }

    Object.keys(params).forEach(key => {
      buildParam(key, params[key], add);
    });

    url += (url.indexOf('?') !== -1 ? '&' : '?') + serializedParams.join('&');

    return url;
  }

  function buildParam (key: string | number, val: any, add: AddFunc): void {
    if (Array.isArray(val)) {
      val.forEach((v, k) => {
        buildParam(
          `${key}[${typeof v === 'object' && v !== null ? k : ''}]`,
          v,
          add
        );
      });
    } else if (isPlainObject(val)) {
      Object.keys(val).forEach(k => {
        buildParam(
          `${key}[${k}]`,
          val[k],
          add
        );
      });
    } else {
      add(key, val);
    }
  }

  console.log(buildURL('http://www.baidu.com?a=3#/sf', {
    a: 1,
    b: {
      pwd: 123
    },
    c: [1, new Date(), {d: 1, e: 2}, [1, [2, [100]]], {f: 'f'}]
  }));

})();