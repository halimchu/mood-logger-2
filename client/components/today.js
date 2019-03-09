import React, {Component} from 'react'
import {connect} from 'react-redux'
import Smiley from './smiley'
import {getEmotionTodayThunk} from '../store/emotion'

class Home extends Component {
  componentDidMount() {
    this.props.getEmotionToday()
  }

  render() {
    const {todayEmotion} = this.props
    console.log('Today', todayEmotion)
    return (
      <div>
        <div id="colors-list">
          <Smiley
            color={todayEmotion.color}
            number="3"
            selectFace={this.selectFace}
          />
        </div>
        Number:
        {todayEmotion.number}
        <div>Journal Entry:</div>
        <div>{todayEmotion.journalEntry}</div>
        <div>
          Life Stressors:
          {todayEmotion.lifeStressors}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todayEmotion: state.emotion.emotion
})

const mapDispatchToProps = dispatch => ({
  getEmotionToday: () => dispatch(getEmotionTodayThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
