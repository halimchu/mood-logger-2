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
        'number',
        'journalEntry',
        'imageUrl',
        'lifeStressors',
        'date',
        'day'
      ]
    })
    res.json(emotions)
  } catch (err) {
    next(err)
  }
})

// api/emotions/today
router.get('/today', async (req, res, next) => {
  const today = new Date().toLocaleDateString()
  try {
    const response = await Emotion.findOne({
      where: {date: today}
    })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

const today = new Date().toLocaleDateString()
const d = new Date()
const currentMonth = d.getMonth() + 1
const currentYear = d.getFullYear()
const dayOfWk = d.getDay() //6 Saturday
const dayOfMonth = Number(today.split('/')[1]) //9

// api/emotions/week
router.get('/week', async (req, res, next) => {
  const begOfWkDay = dayOfMonth - dayOfWk //3 Monday

  const firstDayOfWk = `${currentMonth}/${begOfWkDay}/${currentYear}`
  const todayDate = `${currentMonth}/${dayOfMonth}/${currentYear}`

  try {
    const response = await Emotion.findAll({
      where: {
        date: {
          $between: [firstDayOfWk, todayDate]
        }
      }
    })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

// ---------------- POSTS and PUTS --------------- //

// api/emotions
router.post('/', async (req, res, next) => {
  try {
    console.log('REQ.BODYYYY', req.body)
    const todayDate = `${currentMonth}/${dayOfMonth}/${currentYear}`

    const days = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }

    const day = days[d.getDay()]

    let lifeStressors = []
    for (let i = 4; i < Object.entries(req.body).length; ++i) {
      lifeStressors.push(Object.entries(req.body)[i][0])
    }

    const newReq = {
      number: req.body.number,
      color: req.body.color,
      journalEntry: req.body.journalEntry,
      lifeStressors: lifeStressors,
      date: todayDate,
      day: day
    }

    const emotion = await Emotion.create(newReq)
    res.json(emotion)
  } catch (error) {
    next(error)
  }
})
