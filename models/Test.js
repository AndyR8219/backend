const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      title: String,
      answers: [
        {
          title: String,
          isCorrect: Boolean,
        },
      ],
    },
  ],
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test
