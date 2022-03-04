import { useSelector } from 'react-redux'

export const useFirebase = () => {
  return useSelector(state => state.app)
}
