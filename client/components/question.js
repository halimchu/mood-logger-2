import React from 'react'
import Checkbox from './checkbox'

const Question = props => {
  return (
    <div>
      <h5>
        Question 1: Do you have little interest or pleasure in doing things?
      </h5>

      <div className="row">
        <div className="col s3">
          <label>
            <Checkbox name="Question1" />
            <span>Yes</span>
          </label>
        </div>

        <div className="col s3">
          <label>
            <Checkbox name="Question1" />
            <span>No</span>
          </label>
        </div>
      </div>

      <h5>
        Question 2: Do you have little interest or pleasure in doing things?
      </h5>
      <div className="row">
        <div className="col s3">
          <label>
            <Checkbox name="Question2" />
            <span>Yes</span>
          </label>
        </div>

        <div className="col s3">
          <label>
            <Checkbox name="Question1" />
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Question
