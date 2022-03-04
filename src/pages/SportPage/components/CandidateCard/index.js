import React, { useState } from 'react'
import { doc, getFirestore, updateDoc, onSnapshot } from 'firebase/firestore'

const CandidateCard = ({ candidate, id, sportType }) => {
  const [realtimeCount, setRealtimeCount] = useState(0)
  const db = getFirestore()
  onSnapshot(doc(db, sportType, id), (doc) => {
    setRealtimeCount(doc.data().voteCount)
  })
  const vote = async () => {
    const currentCardRef = doc(db, sportType, id)
    await updateDoc(currentCardRef, {
      voteCount: realtimeCount + 1
    })
    // window.location.reload()
  }
  return (
      <div className="w-full h-96 rounded flex flex-col items-center  shadow-lg bg-custom-200">
        <img className="h-1/2" src={candidate.photoLink} alt={candidate.introduction} />
        <div className="p-4 flex flex-col items-center">
          <div className="font-bold text-xl">{candidate.username}</div>
          <p className="text-gray-700 text-base">
            {candidate.introduction.length > 20 ? candidate.introduction.substring(0, 20) + '...' : candidate.introduction }
          </p>
        </div>
        <div className="px-6">
          <button onClick={vote} className={'border-custom-800 border-2 px-4 py-2 mx-auto rounded-xl bg-custom-600 transition hover:bg-custom-500'}>
            投給我！
          </button>
          <div className={'mt-1'}>
            目前票數：{realtimeCount}
          </div>
        </div>
      </div>
  )
}

export default CandidateCard
