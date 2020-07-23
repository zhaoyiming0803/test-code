const { CronJob } = require('cron')
const express = require('express')

const job = new CronJob('0 0 11 * * 3', () => {
  console.log('周三上午11点')
}, null, true)

const app = express()

app.use('/', (req, res) => {
  
})

app.listen('8081', (err) => {
  if (err) console.log(err)
  else console.log('app listen at port 8081')
})

