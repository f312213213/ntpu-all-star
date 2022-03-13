import ActionTypes from './ActionTypes'

const defaultState = {
  app: {},
  snackbar: {
    show: false,
    type: 'success',
    message: ''
  },
  backdrop: false,
  helmet: {
    title: '北大明星賽 | 2022',
    description: '這是用來選出北大明星賽參賽者的投票網站'
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.APP_INIT: {
      return {
        ...state,
        app: action.payload
      }
    }
    case ActionTypes.CHANGE_HELMET: {
      return {
        ...state,
        helmet: {
          title: action.payload.title,
          description: action.payload.description
        }
      }
    }
    case ActionTypes.SHOW_BACKDROP: {
      return {
        ...state,
        backdrop: true
      }
    }
    case ActionTypes.CLOSE_BACKDROP: {
      return {
        ...state,
        backdrop: false
      }
    }
    case ActionTypes.SHOW_SNACKBAR: {
      return {
        show: true,
        type: action.payload.snackbarType,
        message: action.payload.snackbarMessage
      }
    }
    case ActionTypes.CLOSE_SNACKBAR: {
      return {
        ...state,
        snackbar: defaultState.snackbar
      }
    }
    default: {
      return state
    }
  }
}
