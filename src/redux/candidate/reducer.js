import ActionTypes from './ActionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.CANDIDATE_GET: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
