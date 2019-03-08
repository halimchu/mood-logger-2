import React from 'react'

const Smiley = props => {
  const number = props.number
  const color = props.color

  return (
    <div
      className={props.color}
      onClick={() => props.selectFace(number, color)}
    />

    // color stuff
    // <div>
    //   <img src={props.image} onClick={() => props.selectFace(number)} />
    // </div>
  )
}

export default Smiley
