import React from 'react'

const InputName = ({content,type,idInput}) => {
  return (
    <input id={idInput} type={type} placeholder={content}/>
  )
}

export default InputName
