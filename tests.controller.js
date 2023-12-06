const chalk = require('chalk')
const Test = require('./models/Test')

// async function addNote(title) {
//   await Note.create({ title })

//   console.log(chalk.bgGreen('Note was added!'))
// }

async function initializeFirstTest() {
  try {
    const existingTest = await Test.findOne()

    if (!existingTest) {
      await Test.create({
        title: 'Frontend Test',
        questions: [
          {
            title: 'React - это... ?',
            answers: [
              {
                title: 'библиотека',
                isCorrect: true,
              },
              {
                title: 'фреймворк',
                isCorrect: false,
              },
              {
                title: 'приложение',
                isCorrect: false,
              },
            ],
          },
        ],
      })
      console.log('Первая запись в коллекции "tests" была инициализирована.')
    } else {
      console.log('В коллекции "tests" уже есть записи.')
    }
  } catch (error) {
    console.error('Произошла ошибка:', error.message)
  }
}

async function getTests() {
  const tests = await Test.find()
  return tests
}

// async function getQuestions() {
//   const tests = await Test.find({ questions }).exec()
//   console.log(tests)
//   return tests
// }
// async function removeNote(id) {
//   await Note.deleteOne({ _id: id })
//   console.log(chalk.red(`Note with id="${id}" has been removed.`))
// }

// async function updateNote(noteData) {
//   await Note.updateOne({ _id: noteData.id }, { title: noteData.title })
//   console.log(chalk.bgGreen(`Note with id="${noteData.id}" has been updated!`))
// }

module.exports = {
  // addNote,
  getTests,
  // getQuestions,
  // removeNote,
  // updateNote,
  initializeFirstTest,
}
