self.onmessage = event => {
  var num = event.data
  var timer = setInterval(() => {
    if (num < 1) {
      clearInterval(timer)
      self.close()
    } else {
      self.postMessage(--num)
    }
  }, 1000)  
}