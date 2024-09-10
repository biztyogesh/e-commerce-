import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offeers On Your Email</h1>
      <p>Subscribe to our newlatter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email id'></input>
        <button>Subscribe</button>
      </div>
    </div>
    
  )
}

export default NewsLetter
