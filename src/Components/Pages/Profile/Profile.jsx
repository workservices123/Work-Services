import React from 'react'
import { ContainerProfile } from '../../Layouts/ContainerProfile/ContainerProfile'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'

export const Profile = () => {
  return (
    <div className='body'>
        <HeaderHome />
        <ContainerProfile/>
    </div>
  )
}
