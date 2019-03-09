import React from 'react'

const Smiley = props => {
  const number = props.number
  const color = props.color

  return props.displayQuestion ? (
    <div
      className={props.color}
      onClick={() => {
        props.displayQuestion()
        props.selectFace(number, color)
      }}
    />
  ) : (
    <div
      className={props.color}
      onClick={() => props.selectFace(number, color)}
    />
  )
}

export default Smiley
