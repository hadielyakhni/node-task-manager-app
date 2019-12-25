require('dotenv').config()
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('', (req, res) => {
  res.send('Welcome to my task-manager Rest API. Use http(s) to interact with it.')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))