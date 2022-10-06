import React from 'react'

const Button = ({text,func,wid,disabled=false}) => {
  return (
    <div>
     <button className={`bttn ${disabled && "disabled"}`} onClick={(e)=>!disabled &&  func && func(e)} width={wid} >{text}   </button>
    </div>
  )
}

export default Button