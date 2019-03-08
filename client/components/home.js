import React, {Component} from 'react'
import {connect} from 'react-redux'
import {RadioGroup, RadioButton} from 'react-radio-buttons'
import {addEmotionToDatabaseThunk} from '../store/emotion'
import Smiley from './smiley'
import Question from './question'
// import LifeStressor from './life-stressors'
import Checkbox from './checkboxes'
// import { Checkbox } from '@material-ui/core'

// import image from '../../public/Image.png'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      color: '',
      journalEntry: '',
      displayQuestion: false
    }
    this.selectFace = this.selectFace.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayQuestion = this.displayQuestion.bind(this)
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
    // console.log(this.state)
    event.preventDefault()
    const emotion = this.state
    this.props.addEmotionToDatabase(emotion)
  }

  displayQuestion() {
    console.log('DISPLA Y', this.state.displayQuestion)
    this.setState({displayQuestion: !this.state.displayQuestion})
    // console.log('STATE', this.state.displayQuestion)
  }

  render() {
    // console.log('STATE', this.state)
    return (
      <div>
        <div id="colors-list">
          <Smiley
            id="red"
            className="red"
            number="1"
            selectFace={this.selectFace}
            onClick={this.displayQuestion}
          />
          <Smiley className="orange" number="2" selectFace={this.selectFace} />
          <Smiley className="yellow" number="3" selectFace={this.selectFace} />
          <Smiley className="green" number="4" selectFace={this.selectFace} />
          <Smiley className="blue" number="5" selectFace={this.selectFace} />
        </div>

        {/* {this.state.showStudent ? <NewStudentForm addStudent={this.addStudent} /> : null} */}
        {this.state.displayQuestion ? (
          <Question addStudent={this.addStudent} />
        ) : null}

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

        {/* {this.state.displayQuestion ? (
          <Question />
        ) : (
          <p></p>
        )} */}

        {!this.state.displayQuestion && <Question />}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addEmotionToDatabase: emotion => dispatch(addEmotionToDatabaseThunk(emotion))
})

export default connect(null, mapDispatchToProps)(Home)
