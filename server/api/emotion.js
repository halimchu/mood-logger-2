const router = require('express').Router()
const {Emotion} = require('../db/models')
module.exports = router

// api/emotions
router.get('/', async (req, res, next) => {
  try {
    const emotions = await Emotion.findAll({
      attributes: ['id', 'color', 'day', 'number', 'journalEntry', 'imageUrl']
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
    const emotion = await Emotion.create(req.body)
    res.json(emotion)
  } catch (error) {
    next(error)
  }
})
