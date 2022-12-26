const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello World from amr! fghgg!!')
})

app.listen(port, () => {
  console.log(`app is running on port: ${port}`)
})