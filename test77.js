;(function () {
  // jquery serialize
  // https://github.com/jquery/jquery/blob/master/src/serialize.js

  var toString = Object.prototype.toString;

  function isPlainObject (field) {
    return toString.call(field) === '[object Object]';
  }

  function isDate (field) {
    return toString.call(field) === '[object Date]';
  }

  function buildURL (url, params) {
    const hashIndex = url.indexOf('#');
    if (hashIndex) {
      url = url.substring(0, hashIndex);
    }

    if (!params) {
      return url;
    }

    const parts = [];
    let prefix = '';

    function add ( key, valueOrFunction ) {
      var value = typeof valueOrFunction === 'function' 
        ? valueOrFunction() 
        : valueOrFunction;
			parts[parts.length] = encodeURIComponent( key ) + '=' +
				encodeURIComponent(value === null ? '' : value);
    };
    
    if (Array.isArray(params)) {
      params.forEach((val, key) => {
        add(key, val);
      });
    } else {
      for (prefix in params) {
        buildParams(prefix, params[prefix], add);
      }
    }

    return parts.join('&');
  }

  var rbracket = /\[\]$/;

  function buildParams (prefix, obj, add) {
    var name;
    if ( Array.isArray( obj ) ) {
      obj.forEach((v, i) => {
        buildParams(
          prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
          v,
          add
        );
      });
    } else if (isPlainObject(obj)) {
      for (name in obj) {
        buildParams( prefix + "[" + name + "]", obj[ name ], add );
      }
  
    } else {
      add( prefix, obj );
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