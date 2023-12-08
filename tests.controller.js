const TestModel = require('./models/Test.js')

const getAllTests = async (_, res) => {
  try {
    const tests = await TestModel.find()
    res.json(tests)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось получить тесты',
    })
  }
}

const getOneTest = async (req, res) => {
  try {
    const testId = req.params.id

    const test = await TestModel.findOne({
      _id: testId,
    })
    res.json(test)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось получить тест',
    })
  }
}

const createTest = async (req, res) => {
  try {
    const doc = new TestModel(req.body)

    const newTest = await doc.save()

    res.json(newTest)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось создать тест',
    })
  }
}

const updateTest = async (req, res) => {
  try {
    const testId = req.params.id

    await TestModel.updateOne(
      {
        _id: testId,
      },
      req.body
    )

    res.json({
      success: true,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось обновить тест',
    })
  }
}

module.exports = {
  getAllTests,
  getOneTest,
  createTest,
  updateTest,
}
