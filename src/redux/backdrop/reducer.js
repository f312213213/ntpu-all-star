import ActionTypes from './ActioTypes'

export default (state = false, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_BACKDROP: {
      return true
    }
    case ActionTypes.CLOSE_BACKDROP: {
      return false
    }
    default: {
      return state
    }
  }
}
