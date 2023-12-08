const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const mongoose = require('mongoose')
const {
  getAllTests,
  getOneTest,
  createTest,
  updateTest,
} = require('./tests.controller')

const PORT = 3003
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cors())

app.get('/tests', getAllTests)
app.get('/tests/:id', getOneTest)
app.post('/tests', createTest)
app.post('/tests/:id', updateTest)

mongoose
  .connect(
    'mongodb+srv://Andy152:77Njhnyjdfz,fpf@cluster0.rvnasvw.mongodb.net/quiz?retryWrites=true&w=majority'
  )
  .then(async () => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    })
  })
