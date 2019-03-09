import axios from 'axios'

// ACTIONS
const ADD_EMOTION_TO_DATABASE = 'ADD_EMOTION_TO_DATABASE'
const GET_EMOTIONS_FROM_DATABASE = 'GET_EMOTION_FROM_DATABASE'
const GET_EMOTION_TODAY = 'GET_EMOTION_TODAY'
const GET_EMOTIONS_WEEK = 'GET_EMOTIONS_WEEK'

// ACTION CREATORS
const addEmotionToDatabase = emotion => ({
  type: ADD_EMOTION_TO_DATABASE,
  emotion
})

const getEmotionToday = emotion => ({
  type: GET_EMOTION_TODAY,
  emotion
})

const getEmotionsWeek = emotions => ({
  type: GET_EMOTIONS_WEEK,
  emotions
})

// THUNK CREATORS
export const addEmotionToDatabaseThunk = emotion => {
  return async dispatch => {
    const response = await axios.post('/api/emotions', emotion)
    dispatch(addEmotionToDatabase(response))
  }
}

export const getEmotionTodayThunk = () => {
  return async dispatch => {
    const response = await axios.get('/api/emotions/today')
    const emotion = response.data
    dispatch(getEmotionToday(emotion))
  }
}

export const getEmotionsWeekThunk = () => {
  return async dispatch => {
    const response = await axios.get('/api/emotions')
    const emotions = response.data
    // console.log('STORE EMOTIONS', emotions)
    dispatch(getEmotionsWeek(emotions))
  }
}

// INITIAL STATE
const initialState = {
  emotions: [],
  emotion: {}
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMOTION_TODAY: {
      return {...state, emotion: action.emotion}
    }
    case GET_EMOTIONS_WEEK: {
      return {...state, emotions: action.emotions}
    }
    default:
      return state
  }
}

export default reducer
