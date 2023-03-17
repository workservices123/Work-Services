import React from 'react'
import ButtonLogin from '../../UI/ButtonLogin/ButtonLogin'
import TitleRegister from '../../UI/TitleRegister/TitleRegister'
import InputLastName from '../../UI/InputLastName/InputLastName'
import InputName from '../../UI/InputName/InputName'
import InputPassword from '../../UI/InputPassword/inputPassword'

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
