require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT||3000
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middleware/errorHandler')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(router)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})