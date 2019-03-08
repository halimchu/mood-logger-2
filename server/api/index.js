const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/emotions', require('./emotion'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
