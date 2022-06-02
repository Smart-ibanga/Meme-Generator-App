import React from 'react'
import logo from '../components/images/Troll-Face.svg'

function Nav() {
  return (
    <div className='navbar'>
         <img src={logo} alt="meme-logo" className='meme-logo' />  
         <h1 className='logo-title'>Meme Generator</h1>
         <p className='logo-sub'>React project</p>
    </div>
  )
}

export default Nav