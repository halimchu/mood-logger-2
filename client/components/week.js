import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getEmotionsWeekThunk} from '../store/emotion'
import Smiley from './smiley'

class Week extends Component {
  componentDidMount() {
    this.props.getEmotionsWeek()
  }

  render() {
    const {emotions} = this.props
    console.log(emotions)

    return (
      <div>
        Week
        {emotions.map(emotion => {
          return (
            <div id="colors-list" key={emotion.id}>
              <Smiley
                color={emotion.color}
                number={emotion.number}
                selectFace={this.selectFace}
              />
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
