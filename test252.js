;(function () {
  const path = require('path')
  const fs = require('fs')
  
  fs.readdir(path.join(__dirname), (err, files) => {
    console.log(files)
  })

})();