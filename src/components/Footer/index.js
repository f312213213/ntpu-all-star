import React from 'react'

const Footer = () => {
  return (
      <footer className={'-bottom-10 flex justify-center items-center bg-custom-800 text-custom-200 p-2 w-full'}>
        Build by&nbsp;
        <a href="https://chiendavid.com" target={'_blank'} rel="noreferrer" className={'font-bold capitalize'}> david</a>
        , made with ❤️
      </footer>
  )
}

export default Footer
