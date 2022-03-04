import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import CandidateCard from './components/CandidateCard'
import { useParams } from 'react-router-dom'

const SportPage = () => {
  const [candidates, setCandidates] = useState([])

  const { sportType } = useParams()
  const getData = async () => {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, sportType))
    querySnapshot.forEach((doc) => {
      setCandidates([...candidates, doc.data()])
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
      <div className={'Page'}>
        <div className={'w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4'}>
          {
            candidates.map((c, index) => <CandidateCard key={index} candidate={c}/>)
          }

        </div>
      </div>
  )
}

export default SportPage
