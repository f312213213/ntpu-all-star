import React, { useEffect, useState, createRef } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

import CandidateCard from './components/CandidateCard'
import { useParams } from 'react-router-dom'
import actions from '../../redux/actions'
import { useUser } from '../../hooks/user'

const SportPage = () => {
  const [candidates, setCandidates] = useState([])
  const [copy, setCopy] = useState([])
  const { sportType } = useParams()
  const searchRef = createRef()
  const dispatch = useDispatch()
  const loaclUser = useUser()

  const getData = () => {
    dispatch(actions.backdrop.showBackdrop())
    setTimeout(async () => {
      setCandidates([])
      const tempArray = []
      const db = getFirestore()
      const querySnapshot = await getDocs(collection(db, sportType))
      querySnapshot.forEach((doc) => {
        tempArray.push({ id: doc.id, data: doc.data() })
      })
      setCandidates(tempArray)
      setCopy(tempArray)
      dispatch(actions.backdrop.closeBackdrop())
    }, 1000)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    dispatch(actions.helmet.changeHelmet(`${sportType} | 北大明星賽 2022`, `這個頁面在投${sportType}`))
  })

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
        <div className={'w-full flex justify-around my-4'}>
          <input placeholder={'輸入想找的名字'} onChange={changeHandler} ref={searchRef} type="text" className={'p-2 rounded outline-0 ring-4 ring-custom-400 focus:ring-red-700'}/>

          {loaclUser.displayName &&
            <div>
              你在這個分區還有 <span className={'text-red-500'}>{3 - loaclUser[sportType + 'VoteCount']}</span> 票可以投
            </div>
          }
        </div>
        {
          candidates.length > 0
            ? <div className={'w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4'}>
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
