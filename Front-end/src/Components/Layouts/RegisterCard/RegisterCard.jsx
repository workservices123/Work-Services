import React from 'react'
import ButtonRegister from '../../UI/ButtonRegister/ButtonRegistre'
// import imageLogo from '../imageLogo/imageLogo'
import InputConfirmPassword from '../../UI/inputConfirmPassword/inputConfirmPassword'
import InputLastName from '../../UI/InputLastName/InputLastName'
import InputName from '../../UI/InputName/InputName'
import InputPassword from '../../UI/InputPassword/inputPassword'
import TitleLogin from '../../UI/TitleLogin/TitleLogin'



const RegisterCard = () => {
  return (
    <div className='containerPrincipal'>
      {/* <imageLogo /> */}
        <div className='InputsRegister'>
          <TitleLogin />
          <InputName />
          <InputLastName />
          <InputPassword />
          <InputConfirmPassword />
        </div>
          <ButtonRegister />
    </div>
  )
}

export default RegisterCard
