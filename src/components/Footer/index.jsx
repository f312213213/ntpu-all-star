import React, { useEffect, useState } from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

const Footer = () => {
  const [mode, setMode] = useState(localStorage.theme)

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
        <div>
          Build by&nbsp;
          <a href="https://chiendavid.com" target={'_blank'} rel="noreferrer" className={'font-bold capitalize'}> david</a>
          , made with ❤️
        </div>
        <div>
          <button className={'mr-8'} onClick={toggleDarkMode}>
            {mode === 'dark' ? <WbSunnyIcon /> : <ModeNightIcon />}
          </button>
          <a href={'https://github.com/f312213213/ntpu-all-star'} target={'_blank'} rel="noreferrer">
            github
          </a>
        </div>

      </footer>
  )
}

export default Footer
