import React from 'react'
import '../InputText/Input.css'


const InputComponent = ({text , setState , type,value}) => {
  return (
    <div >
    <div className='boxtext'>{text}</div>
    <input  type={type} placeholder={text} className='boxdesign' value={value} onChange={(e)=>{setState(e.target.value)}} required />

    </div>

  )
}

export default InputComponent