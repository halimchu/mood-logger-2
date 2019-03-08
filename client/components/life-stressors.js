import React from 'react'

const LifeStressor = props => {
  return (
    <form>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option1"
            // checked={true}
            className="form-check-input"
          />
          Option 1
        </label>
      </div>
    </form>

    // <div onChange={props.pickLifeStressor}>
    // </div>
  )
}

export default LifeStressor
