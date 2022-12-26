const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello World from amr! Using dockerHub!!')
})

app.listen(port, () => {
  console.log(`app is running on port: ${port}`)
})