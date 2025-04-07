import React from 'react'
import Header from '../other/Header'
import TaslListNumber from '../other/TaslListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className='p-10 bg-[#ICICIC] h-screen'>
      
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaslListNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
