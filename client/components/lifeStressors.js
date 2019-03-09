import React, {Component} from 'react'
import Checkbox from './checkbox'

class LifeStressors extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('lifestressor', this.props)
    return (
      <div>
        <h5>Are you experiencing any life stressors?</h5>
        <div className="row">
          <div className="col s2">
            {/* <label>
              <Checkbox name='Married' value={this.state.married} handleCheck={this.props.handleCheck} />
              <span>Married</span>
            </label> */}
            <label>
              <Checkbox
                name="Married"
                value={this.props.value[0]}
                handleCheck={this.props.handleCheck}
              />
              <span>Married</span>
            </label>
            <label>
              <Checkbox
                name="Divorced"
                value={this.props.value[1]}
                handleCheck={this.props.handleCheck}
              />
              <span>Divorced</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default LifeStressors
