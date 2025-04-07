import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // const[username , setUsername] = useState('')

  // if(!data){
  //   setUsername("admin")
  // }else{
  //   setUsername(data.firstName)
  // }
  
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👌 </span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-mediun text-white px-5 py-2 rounded-small '>Log Out</button>
    </div>
  )
}

export default Header
