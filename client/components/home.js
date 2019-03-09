import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addEmotionToDatabaseThunk} from '../store/emotion'
import Smiley from './smiley'
import Question from './question'
import Checkbox from './checkbox'
import LifeStressors from './lifeStressors'
// import { Checkbox } from '@material-ui/core'

// import image from '../../public/Image.png'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      color: '',
      displayQuestion: false,
      journalEntry: ''
    }
    this.selectFace = this.selectFace.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayQuestion = this.displayQuestion.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  selectFace(number, color) {
    this.setState({
      number: number,
      color: color
    })
  }

  handleChange(event) {
    this.setState({
      journalEntry: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const emotion = this.state
    this.props.addEmotionToDatabase(emotion)
  }

  displayQuestion() {
    this.setState({displayQuestion: !this.state.displayQuestion})
  }

  handleCheck(event) {
    console.log('HANDLECHECK', event.target)
    if (event.target.value === '') {
      this.setState({
        [event.target.name]: event.target.name
      })
    } else {
      this.setState({
        [event.target.name]: ''
      })
    }
  }

  render() {
    console.log('state', this.state)
    // console.log('state', event.target)

    return (
      <div>
        <div id="colors-list">
          <Smiley
            color="red"
            number="1"
            selectFace={this.selectFace}
            displayQuestion={this.displayQuestion}
          />
          <Smiley
            color="orange"
            number="2"
            selectFace={this.selectFace}
            displayQuestion={this.displayQuestion}
          />
          <Smiley color="yellow" number="3" selectFace={this.selectFace} />
          <Smiley color="green" number="4" selectFace={this.selectFace} />
          <Smiley color="blue" number="5" selectFace={this.selectFace} />
        </div>

        <div>{this.state.displayQuestion && <Question />}</div>

        <LifeStressors
          value={[this.state.Married, this.state.Divorced]}
          handleCheck={this.handleCheck}
        />

        {/* <h5>Are you experiencing any life stressors?</h5>
        <div className='row'>
          <div className='col s2'>
            <label>
              <Checkbox name='Married' value={this.state.Married} handleCheck={this.handleCheck} />
              <span>Married</span>
            </label>
            <label>
              <Checkbox name='Job Change' value={this.state.JobChange} handleCheck={this.handleCheck} />
              <span>Job Change</span>
            </label>
          </div>

          <div className='col s2'>
            <label>
             <Checkbox name='Divorced' value={this.state.jobChange} handleCheck={this.handleCheck} />
              <span>Divorced</span>
            </label>
            <label>
              <Checkbox name='Job Loss' value={this.state.jobChange} handleCheck={this.handleCheck} />
              <span>Job Loss</span>
            </label>
          </div>

          <div className='col s4'>
            <label>
             <Checkbox name='Chronic Illness' value={this.state.jobChange} handleCheck={this.handleCheck} />
              <span>Chronic Illness</span>
            </label>
            <label>
              <Checkbox name='Loss of loved one' value={this.state.jobChange} handleCheck={this.handleCheck} />
              <span>Loss of loved one</span>
            </label>
          </div>

        </div> */}

        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="feelings">Feelings</label>
            <input
              type="text"
              value={this.state.journalEntry}
              onChange={this.handleChange}
            />
            <button
              className="waves-effect waves-light btn-large"
              type="button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addEmotionToDatabase: emotion => dispatch(addEmotionToDatabaseThunk(emotion))
})

export default connect(null, mapDispatchToProps)(Home)
