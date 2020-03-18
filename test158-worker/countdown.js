let timeArr = []

self.onmessage = event => {
  timeArr = timeArr.concat(event.data)

  let timer = setInterval(() => {
    let isComplete = true

    timeArr = timeArr.map(num => {
      num -= 1
      if (num < 0) {
        return 0
      }
      isComplete = false
      return num
    })

    if (isComplete) {
      console.log('completed')
      clearInterval(timer)
      self.close()
    } else {
      self.postMessage(timeArr)
    }
  }, 1000)  
}