import { useSelector } from 'react-redux'

export const useCandidates = () => {
  return useSelector(state => state.candidate)
}
