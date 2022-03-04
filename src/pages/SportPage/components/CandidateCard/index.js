import React from 'react'

const CandidateCard = ({ candidate }) => {
  return (
      <div className="w-full h-96 rounded flex flex-col items-center overflow-hidden shadow-lg bg-custom-200">
        <img className="h-1/2" src={candidate.photoLink} alt={candidate.introduction} />
        <div className="p-4 flex flex-col items-center">
          <div className="font-bold text-xl">{candidate.username}</div>
          <p className="text-gray-700 text-base">
            {candidate.introduction}
          </p>
        </div>
        <div className="px-6">
          <button className={'border-custom-800 border-2 p-4 mx-auto rounded-xl'}>
            投給我！
          </button>
          <div className={'mt-1'}>
            目前票數：{candidate.voteCount}
          </div>
        </div>
      </div>
  )
}

export default CandidateCard
