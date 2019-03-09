const router = require('express').Router()
const {Emotion} = require('../db/models')
module.exports = router

// api/emotions
router.get('/', async (req, res, next) => {
  try {
    const emotions = await Emotion.findAll({
      attributes: [
        'id',
        'color',
        'day',
        'number',
        'journalEntry',
        'imageUrl',
        'lifeStressors'
      ]
    })
    res.json(emotions)
  } catch (err) {
    next(err)
  }
})

// api/emotions
router.post('/', async (req, res, next) => {
  try {
    console.log('REQ.BODYYYY', req.body)

    let lifeStressors = []
    for (let i = 4; i < Object.entries(req.body).length; ++i) {
      lifeStressors.push(Object.entries(req.body)[i][0])
    }

    const newReq = {
      number: req.body.number,
      color: req.body.color,
      journalEntry: req.body.journalEntry,
      lifeStressors: lifeStressors
    }

    const emotion = await Emotion.create(newReq)
    res.json(emotion)
  } catch (error) {
    next(error)
  }
})
