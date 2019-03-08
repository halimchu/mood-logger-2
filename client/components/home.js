import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addEmotionToDatabaseThunk} from '../store/emotion'
import Smiley from './smiley'

// import Smiley from '../../public/images/smiley.png'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      color: '',
      journalEntry: ''
    }
    this.selectFace = this.selectFace.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    console.log(this.state)
    event.preventDefault()
    const emotion = this.state
    this.props.addEmotionToDatabase(emotion)
  }

  render() {
    return (
      <div>
        <div id="colors-list">
          {/* <img src={require('../../public/smiles.jpg')} /> */}
          {/* <image src={Image} /> */}
          {/* <Smiley image={Image} number='1' selectFace={this.selectFace}/> */}
          {/* <Smiley image='https://cdn2.iconfinder.com/data/icons/picons-essentials/71/smiley_sad-512.png' number='2' selectFace={this.selectFace}/> */}
          {/* <Smiley image='https://cdn2.iconfinder.com/data/icons/picons-essentials/71/smiley_sad-512.png' number='3' selectFace={this.selectFace}/> */}

          <Smiley color="red" number="1" selectFace={this.selectFace} />
          <Smiley color="orange" number="2" selectFace={this.selectFace} />
          <Smiley color="yellow" number="3" selectFace={this.selectFace} />
          <Smiley color="green" number="4" selectFace={this.selectFace} />
          <Smiley color="blue" number="5" selectFace={this.selectFace} />
        </div>

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
