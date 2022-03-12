import actionTypes from './ActionTypes'

export const changeHelmet = (type, message) => ({
  type: actionTypes.CHANGE_HELMET,
  payload: {
    title: type,
    description: message
  }
})
