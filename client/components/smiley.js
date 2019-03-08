import React from 'react'

const Smiley = props => {
  const number = props.number
  const color = props.color

  return (
    // color stuff
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

// const Color = (props) => {
//   return (
//     // this is a react div element, not html!
//     <div className={props.color} />
//   )
// }

export default Smiley
