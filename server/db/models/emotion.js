const Sequelize = require('sequelize')
const db = require('../db')

const Emotion = db.define('emotion', {
  color: {
    type: Sequelize.STRING
  },
  day: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  journalEntry: {
    type: Sequelize.TEXT
    // allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Emotion
