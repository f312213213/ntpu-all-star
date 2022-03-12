import React from 'react'

const Footer = () => {
  return (
      <footer className={'-bottom-10 flex justify-between items-center bg-custom-800 text-custom-200 p-2 w-full px-4'}>
        <div>
          Build by&nbsp;
          <a href="https://chiendavid.com" target={'_blank'} rel="noreferrer" className={'font-bold capitalize'}> david</a>
          , made with ❤️
        </div>
        <a href={'https://github.com/f312213213/ntpu-all-star'} target={'_blank'} rel="noreferrer">
          github
        </a>
      </footer>
  )
}

export default Footer
