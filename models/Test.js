const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      id: String,
      title: String,
      isCorrect: Boolean,
    },
  ],
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test
