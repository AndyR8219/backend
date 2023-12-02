const chalk = require('chalk')
const Test = require('./models/Test')

// async function addNote(title) {
//   await Note.create({ title })

//   console.log(chalk.bgGreen('Note was added!'))
// }

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
}
