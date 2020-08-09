const createGraph = require('./createGraph')

function build (entry) {
  const queue = createGraph(entry)

  let modules = '{'
  queue.forEach(asset => {
    modules += `
      ${asset.id}: [
        function (require, module, exports) { 
          ${asset.code.code} 
        }, 
        ${JSON.stringify(asset.mapping)}
      ],`
  })
  modules += '}'

  return `
    (function(modules){
      function require(id){
        const [fn, mapping] = modules[id];
        function localRequire(relativePath){
          return require(mapping[relativePath]);
        }
        const module = {
          exports: {}
        }
        fn(localRequire, module, module.exports);
        return module.exports;
      }
      require(0);
    })(${modules})
  `
}

eval(build('./assets/index.js'))