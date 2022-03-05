import ActionTypes from './ActionTypes'

export const getCandidate = (candidates) => {
  return {
    type: ActionTypes.CANDIDATE_GET,
    payload: candidates
  }
}
