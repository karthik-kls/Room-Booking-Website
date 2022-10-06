import React from 'react'

const Button2 = ({text,wid,classN,funcbtn,Bookroom,disabled =false}) => {
  return (
    <div>
    <button className={`${classN} ${disabled && "disabled"}`} width={wid} submit={Bookroom} onClick={(e)=>!disabled && funcbtn(e)} >{text}  </button>
   </div>
 )
}

export default Button2