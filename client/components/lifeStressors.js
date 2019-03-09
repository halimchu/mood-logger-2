import React, {Component} from 'react'
import Checkbox from './checkbox'

class LifeStressors extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h5>Are you experiencing any life stressors?</h5>

        <div className="row">
          <div className="col s2">
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

          <div className="col s2">
            <label>
              <Checkbox
                name="Chronic Illness"
                value={this.props.value[2]}
                handleCheck={this.props.handleCheck}
              />
              <span>Chronic Illness</span>
            </label>
            <label>
              <Checkbox
                name="Moved"
                value={this.props.value[3]}
                handleCheck={this.props.handleCheck}
              />
              <span>Moved</span>
            </label>
          </div>

          <div className="col s2">
            <label>
              <Checkbox
                name="Death"
                value={this.props.value[4]}
                handleCheck={this.props.handleCheck}
              />
              <span>Death</span>
            </label>
            <label>
              <Checkbox
                name="Retirement"
                value={this.props.value[5]}
                handleCheck={this.props.handleCheck}
              />
              <span>Retirement</span>
            </label>
          </div>

          <div className="col s2">
            <label>
              <Checkbox
                name="Pregnancy"
                value={this.props.value[6]}
                handleCheck={this.props.handleCheck}
              />
              <span>Pregnancy</span>
            </label>
            <label>
              <Checkbox
                name="Finances"
                value={this.props.value[7]}
                handleCheck={this.props.handleCheck}
              />
              <span>Finances</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default LifeStressors
