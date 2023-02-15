import React from 'react'
import ButtonRegister from '../ButtonRegister/ButtonRegistre'
// import imageLogo from '../imageLogo/imageLogo'
import InputConfirmPassword from '../inputConfirmPassword/inputConfirmPassword'
import InputLastName from '../InputLastName/InputLastName'
import InputName from '../InputName/InputName'
import InputPassword from '../InputPassword/inputPassword'
import TitleLogin from '../TitleLogin/TitleLogin'



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
