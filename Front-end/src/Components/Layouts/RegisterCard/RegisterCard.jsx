import React from 'react'
import ButtonRegister from '../../UI/ButtonRegister/ButtonRegistre'
// import imageLogo from '../imageLogo/imageLogo'
import InputName from '../../UI/InputName/InputName'
import TitleLogin from '../../UI/TitleLogin/TitleLogin'
import { useState } from 'react'

const RegisterCard = () => {
    // const name = document.getElementById("Rinput1")
  // let nameUser = name.textContent
  // console.log(nameUser);
  // const formulario = document.getElementById("InputsRegister")
  // formulario.addEventListener("submit",(event)=>{
  //   event.preventDefault()
  //   let Name=document.getElementById("Rinput1").value
  //   let LastName=document.getElementById("Rinput2").value
  //   let Password=document.getElementById("Rinput3").value
  //   let Confirm=document.getElementById("Rinput4").value

  //   let saveUser = {Name,LastName,Password,Confirm}
  //   let saveUserJson = JSON.stringify(saveUser)

  //   fetch("http://localhost:3000/registrados",{
  //     method: "Post",
  //     body: saveUserJson
  //   })
  // })
  return (
    <div className='containerPrincipal'>
      {/* <imageLogo /> */}
        <div id='InputsRegister'>
          <TitleLogin />
          <InputName idInput="Rinput1" type="text" content="Name"/>
          <InputName idInput="Rinput2" type="text" content="LastName"/>
          <InputName idInput="Rinput3" type="password" content="Password"/>
          <InputName idInput="Rinput4" type="password" content="Confirm Password"/>
          {/* <ButtonRegister /> */}

          {/* <button onClick={(event)=>{
            event.preventDefault()
            let Rinput1 = document.getElementById("Rinput1").value
            let Rinput2 = document.getElementById("Rinput2").value
            let Rinput3 = document.getElementById("Rinput3").value
            let Rinput4 = document.getElementById("Rinput4").value

            let saveUser = { Rinput1,Rinput2,Rinput3,Rinput4 }
            let saveUserJson = JSON.stringify(saveUser)

            fetch("http://localhost:3000/registro1",{
              method: "Post",
              body: saveUserJson
            })
        }}>Registrar</button> */}
        </div>
    </div>
  )
}

export default RegisterCard
// {
//   fetch("http://localhost:3000/registro1").then(x=>x.json()).then(console.log)
// }