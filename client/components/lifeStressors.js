import React from 'react'
import Checkbox from './checkbox'

const LifeStressors = props => {
  return (
    <div>
      <h5>Are you experiencing any life stressors?</h5>

      <div className="row">
        <div className="col s2">
          <label>
            <Checkbox
              name="Married"
              value={props.value[0]}
              handleCheck={props.handleCheck}
            />
            <span>Married</span>
          </label>
          <label>
            <Checkbox
              name="Divorced"
              value={props.value[1]}
              handleCheck={props.handleCheck}
            />
            <span>Divorced</span>
          </label>
        </div>

        <div className="col s2">
          <label>
            <Checkbox
              name="Chronic Illness"
              value={props.value[2]}
              handleCheck={props.handleCheck}
            />
            <span>Chronic Illness</span>
          </label>
          <label>
            <Checkbox
              name="Moved"
              value={props.value[3]}
              handleCheck={props.handleCheck}
            />
            <span>Moved</span>
          </label>
        </div>

        <div className="col s2">
          <label>
            <Checkbox
              name="Death"
              value={props.value[4]}
              handleCheck={props.handleCheck}
            />
            <span>Death</span>
          </label>
          <label>
            <Checkbox
              name="Retirement"
              value={props.value[5]}
              handleCheck={props.handleCheck}
            />
            <span>Retirement</span>
          </label>
        </div>

        <div className="col s2">
          <label>
            <Checkbox
              name="Pregnancy"
              value={props.value[6]}
              handleCheck={props.handleCheck}
            />
            <span>Pregnancy</span>
          </label>
          <label>
            <Checkbox
              name="Finances"
              value={props.value[7]}
              handleCheck={props.handleCheck}
            />
            <span>Finances</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default LifeStressors
