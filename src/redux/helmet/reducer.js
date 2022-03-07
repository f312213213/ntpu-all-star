import ActionTypes from './ActionTypes'

const defaultState = {
  title: '北大明星賽 | 2022',
  description: '這是用來選出北大明星賽參賽者的投票網站'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_HELMET: {
      return {
        title: action.payload.title,
        description: action.payload.description
      }
    }
    default: {
      return state
    }
  }
}
