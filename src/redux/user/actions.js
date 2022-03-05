import ActionTypes from './ActionTypes'

export const userLogin = (user) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: user
  }
}

export const userLogout = () => ({
  type: ActionTypes.USER_LOGOUT
})

export const userUpdate = (user) => {
  return {
    type: ActionTypes.USER_UPDATE,
    payload: user
  }
}
