import React from 'react'
import ButtonLogin from '../../UI/ButtonLogin/ButtonLogin'
import TitleRegister from '../../UI/TitleRegister/TitleRegister'
import InputLastName from '../InputLastName/InputLastName'
import InputName from '../InputName/InputName'
import InputPassword from '../InputPassword/inputPassword'

const LoginCard = () => {
  return (
    <div className='LoginCard'>
        <TitleRegister />
            <div className="LoginCardInputs">
                <InputName />
                <InputLastName />
                <InputPassword />
            </div>
        <ButtonLogin />
    </div>
  )
}

export default LoginCard
