import ActionTypes from './ActionTypes'

const defaultState = {
  app: {},
  snackbar: {
    show: false,
    type: 'success',
    message: ''
  },
  alertDialog: {
    show: false,
    text: null,
    title: null,
    onConfirm: null
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
        ...state,
        snackbar: {
          show: true,
          type: action.payload.snackbarType,
          message: action.payload.snackbarMessage
        }
      }
    }
    case ActionTypes.CLOSE_SNACKBAR: {
      return {
        ...state,
        snackbar: defaultState.snackbar
      }
    }
    case ActionTypes.SHOW_CONFIRM: {
      return {
        ...state,
        alertDialog: {
          show: true,
          title: action.payload.title,
          message: action.payload.message,
          onConfirm: action.payload.onConfirm
        }
      }
    }
    case ActionTypes.CLOSE_CONFIRM: {
      return {
        ...state,
        alertDialog: defaultState.alertDialog
      }
    }
    default: {
      return state
    }
  }
}
