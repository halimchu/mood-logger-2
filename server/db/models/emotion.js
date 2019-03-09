const Sequelize = require('sequelize')
const db = require('../db')

const Emotion = db.define('emotion', {
  color: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  journalEntry: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  lifeStressors: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  date: {
    type: Sequelize.STRING
  },
  day: {
    type: Sequelize.STRING
  }
})

module.exports = Emotion
