import ActionTypes from './ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN: {
      return action.payload
    }
    case ActionTypes.USER_LOGOUT: {
      return {}
    }
    default: {
      return state
    }
  }
}
