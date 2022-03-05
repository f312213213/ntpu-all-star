import React, { useEffect, useState, createRef } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import CandidateCard from './components/CandidateCard'
import { useParams } from 'react-router-dom'

const SportPage = () => {
  const [candidates, setCandidates] = useState([])
  const [copy, setCopy] = useState([])
  const { sportType } = useParams()
  const searchRef = createRef()

  const getData = async () => {
    setCandidates([])
    const tempArray = []
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, sportType))
    querySnapshot.forEach((doc) => {
      tempArray.push({ id: doc.id, data: doc.data() })
    })
    setCandidates(tempArray)
    setCopy(tempArray)
  }

  useEffect(() => {
    getData()
  }, [])

  const changeHandler = () => {
    if (searchRef.current.value === '') {
      setCandidates(copy)
    } else {
      const searchInfo = copy.filter((candidate) => candidate.data.username.indexOf(searchRef.current.value) !== -1)
      setCandidates(searchInfo)
    }
  }

  return (
      <div className={'w-full min-h-screen pt-20 pb-5 bg-custom-500'}>
        <div className={'w-full flex justify-center my-4'}>
          <input placeholder={'輸入想找的名字'} onChange={changeHandler} ref={searchRef} type="text" className={'p-2 rounded outline-0 ring-4 ring-custom-400 focus:ring-red-700'}/>
        </div>
        {
          candidates.length > 0
            ? <div className={'w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4'}>
                {
                  candidates.map((c) => <CandidateCard sportType={sportType} key={c.id} id={c.id} candidate={c.data}/>)
                }
              </div>
            : <div className={'w-full text-center text-custom-200 text-2xl'}>
                沒有明星ㄌ
              </div>
        }

      </div>
  )
}

export default SportPage
