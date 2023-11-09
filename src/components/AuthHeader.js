import React from 'react'
import "./css/form-header.css"

function AuthHeader({text}) {
  return (
    <h4 className='form-header text-center text-white mb-4'>{text} <span id="textHighlighted">Rhythmix</span></h4>
  )
}

export default AuthHeader;