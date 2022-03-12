import React, { useEffect, useState, createRef } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

import CandidateCard from './components/CandidateCard'
import { useParams } from 'react-router-dom'
import actions from '../../redux/actions'
import { useUser } from '../../hooks/user'
import { useCategoryData } from '../../hooks/app'

const SportPage = () => {
  const [candidates, setCandidates] = useState([])
  const [copy, setCopy] = useState([])
  const { sportType } = useParams()
  const searchRef = createRef()
  const dispatch = useDispatch()
  const localUser = useUser()
  const categoryData = useCategoryData(sportType)

  useEffect(() => {
    dispatch(actions.app.getSportPageData(dispatch, sportType, setCandidates, setCopy))
  }, [])

  useEffect(() => {
    dispatch(actions.helmet.changeHelmet(`${categoryData?.text} | 北大明星賽 2022`, `這個頁面在投${sportType}`))
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
        <div className={'w-full flex justify-center items-center my-4'}>
          <div className={'w-2/5 flex-col'}>
            <input placeholder={'輸入想找的名字'} onChange={changeHandler} ref={searchRef} type="text" className={'p-2 w-full rounded outline-0 ring-4 ring-custom-400 focus:ring-custom-700'}/>

            {localUser.displayName &&
                <div className={'m-4 text-center'}>
                  你在這個分區還有 <span className={'text-red-500'}>{categoryData.canVote - localUser[categoryData.sportCount]}</span> 票可以投
                </div>
            }
          </div>

        </div>
        {
          candidates?.length > 0
            ? <div className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4'}>
                {
                  candidates.map((c) => <CandidateCard sportType={sportType} key={c.id} id={c.id} candidate={c.data}/>)
                }
              </div>
            : <div className={'w-full text-center text-custom-200 text-2xl'}>
                {
                  copy.length > 0 ? '沒有明星ㄌ' : '載入中'
                }
              </div>
        }

      </div>
  )
}

export default SportPage
