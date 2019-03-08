import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getEmotionsWeekThunk} from '../store/emotion'
import Smiley from './smiley'

class Week extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getEmotionsWeek()
  }

  render() {
    console.log(this.props)

    // const emotionsList = this.props.emotions.map(emotion => {
    //   return (
    //     emotion.number
    //   )
    // })
    return (
      <div>
        Week
        {this.props.emotions.map(emotion => {
          return (
            <div key={emotion.id}>
              <div id="colors-list">
                <Smiley color={emotion.color} number={emotion.number} />
                {emotion.number}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

// {userProducts &&
//   userProducts.map(product => {
//     return (
//       <div key={product.id}>
//         <h3>
//           {product.name}:
//           {product['item-in-order'].numberOfItems}
//         </h3>
//       </div>
//     )
//   })}

//   <div id='colors-list'>
//     <Smiley color='blue' number='5'/>
//   </div>
// </div>

const mapStateToProps = state => ({
  emotions: state.emotion.emotions
})

const mapDispatchToProps = dispatch => ({
  getEmotionsWeek: () => dispatch(getEmotionsWeekThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Week)
