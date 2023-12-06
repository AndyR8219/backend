const express = require('express')
const chalk = require('chalk')
const mongoose = require('mongoose')
const {
  // addNote,
  getTests,
  initializeFirstTest,
  // getQuestions,
  // removeNote,
  // updateNote,
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

app.get('/api', async (req, res) => {
  res.send(await getTests())
})

// app.post('/', async (req, res) => {
//   try {
//     await addNote(req.body.title)
//     res.render('index', {
//       title: 'Express App',
//       notes: await getNotes(),
//       created: true,
//       error: false,
//     })
//   } catch (error) {
//     console.error('Create error', error)
//     res.render('index', {
//       title: 'Express App',
//       notes: await getNotes(),
//       created: false,
//       error: true,
//     })
//   }
// })

// app.delete('/:id', async (req, res) => {
//   await removeNote(req.params.id)
//   res.render('index', {
//     title: 'Express App',
//     notes: await getNotes(),
//     created: false,
//     error: false,
//   })
// })

// app.put('/:id', async (req, res) => {
//   await updateNote({ id: req.params.id, title: req.body.title })
//   res.render('index', {
//     title: 'Express App',
//     notes: await getNotes(),
//     created: false,
//     error: false,
//   })
// })

mongoose
  .connect(
    'mongodb+srv://Andy152:77Njhnyjdfz,fpf@cluster0.rvnasvw.mongodb.net/quiz?retryWrites=true&w=majority'
  )
  .then(async () => {
    await initializeFirstTest()
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    })
  })
