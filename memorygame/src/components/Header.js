import React, { useState } from 'react'

const Header = ({counter, bestCounter}) => {
  return (
    <header className='header'>
        <img className='logo' src='https://www.epicgames.com/fortnite/%7B0%7D/creative/docs/Images/placeholder-social.png'></img>
        <h1>Fornite Memory Game</h1>
        <div className='scores'>
            <div>{`Current Score is: ${counter}`}</div>
            <div>{` Best is score is: ${bestCounter}`}</div>
        </div>

    </header>
  )
}

export default Header