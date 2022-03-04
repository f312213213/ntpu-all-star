import ActionTypes from './ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.APP_INIT: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
