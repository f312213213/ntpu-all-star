import ActionTypes from './ActionTypes'

export const getCandidate = () => {
  const candidates = []
  return {
    type: ActionTypes.CANDIDATE_GET,
    payload: candidates
  }
}
