import React, { useState } from 'react'
import { getFirestore } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

import { useUser } from '../../../../hooks/user'
import actions from '../../../../redux/actions'
import { useCategoryData } from '../../../../hooks/app'

const CandidateCard = ({ candidate, id, sportType }) => {
  const db = getFirestore()
  const dispatch = useDispatch()
  const localUser = useUser()
  const [count, setCount] = useState(candidate.voteCount)
  const categoryData = useCategoryData(sportType)
  const userCanVote = localUser[categoryData.sportCount] < categoryData.canVote && localUser.voted.indexOf(id) === -1

  const vote = async () => {
    dispatch(actions.user.userVote(dispatch, categoryData.sportCount, localUser, db, categoryData.pathName, id, setCount, count))
  }

  const confirmVote = async () => {
    dispatch(actions.app.showConfirmDialog(`確定投給 ${candidate.username} 嗎？`, '確定投給他嗎', vote))
  }
  return (
      <div className="w-full h-96 rounded flex flex-col items-center shadow-lg bg-custom-200 dark:bg-custom-400 transition relative">
        <img className="h-1/2" src={candidate.photoLink || candidate.photoURL} alt={candidate.introduction} />
        <div className="p-2 flex flex-col items-center">
          <div className="font-bold text-xl">{candidate.username}</div>
          <p className="text-gray-700 text-base text-center">
            {candidate.introduction.length > 85 ? candidate.introduction.substring(0, 85) + '...' : candidate.introduction }
          </p>
        </div>
        <div className="px-6 flex justify-evenly items-center space-x-4 absolute bottom-4">
          {
            localUser.uid &&
              <button onClick={confirmVote} disabled={!userCanVote} className={'border-custom-800 border-2 px-4 py-2 mx-auto rounded-xl bg-custom-600 transition hover:bg-custom-500 disabled:border-none disabled:text-gray-700 disabled:opacity-75 disabled:bg-gray-300'}>
                投給我！
              </button>
          }
          <div className={'mt-1'}>
            目前票數：{count}
          </div>
        </div>
      </div>
  )
}

export default CandidateCard
