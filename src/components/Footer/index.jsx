import React, { useEffect, useState } from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'

const Footer = () => {
  const [mode, setMode] = useState(localStorage.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setMode('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setMode('light')
    }
  }, [localStorage.theme])

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      setMode('light')
      return document.documentElement.classList.remove('dark')
    }
    localStorage.theme = 'dark'
    setMode('dark')
    return document.documentElement.classList.add('dark')
  }
  return (
      <footer className={'-bottom-10 flex justify-between items-center bg-custom-800 text-custom-200 p-2 w-full px-8'}>
        <div className={'group h-full'}>
          <div className={'scale-0 group-hover:scale-100 absolute -bottom-3 bg-custom-600 rounded p-2'}>
            Build by&nbsp;
            <a href="https://chiendavid.com" target={'_blank'} rel="noreferrer" className={'font-bold capitalize'}> david</a>
            , made with ❤️
          </div>
          ❤️
        </div>

        <div className={'flex'}>
          <button className={'mr-4'} onClick={toggleDarkMode}>
            {mode === 'dark' ? <WbSunnyIcon /> : <ModeNightIcon />}
          </button>
          <div onClick={() => dispatch(actions.app.showSnackbar('info', '將在投票結束後開源！'))} rel="noreferrer" className={'cursor-pointer'}>
            <GitHubIcon />
          </div>
        </div>
      </footer>
  )
}

export default Footer
