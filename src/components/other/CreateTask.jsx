import React, { useContext, useState } from 'react'
import Newtask from '../TaskList/Newtask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle,setTaskTiltle] = useState('')
    const [taskDescription,seTaskDescription] = useState('')
    const [taskdate,setTaskDate] = useState('')
    const [assignTo,setAssignTo] = useState('')
    const [category,setCategroy] = useState('')

    const [newTask , setNewTask] = useState({})

    const submitHandler = (e)=>{      
        e.preventDefault()

        setNewTask({taskTitle,taskDescription,taskdate,category,active:false,newtask:true,failed:false,completed:false})
        const data = userData
        // console.log(data);
        
       
        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)    
                elem.taskCounts.newTask = elem.taskCounts.newTask+1           
            }
        })     
        setUserData(data)
        console.log(data);
        
        
        
        setTaskTiltle('')
        setCategroy('')
        setAssignTo('')
        setTaskDate('')
        seTaskDescription('')
        
    }
  return (
    <div className='p-5 bg=[#1c1c1c] mt-5 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}
                 className='flex flex-wrap w-full items-start justify-between'
                 >
                    <div className='w-1/2'>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input    
                            value={taskTitle}
                            onChange={(e)=>{
                                setTaskTiltle(e.target.value)
                            }}                       
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' 
                            />
                            </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                            value={taskdate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }}  
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="Date" /></div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>aggign to</h3>
                            <input 
                            value={assignTo}
                            onChange={(e)=>{
                                setAssignTo(e.target.value)
                            }}  
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' /></div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                            value={category}
                            onChange={(e)=>{
                                setCategroy(e.target.value)
                            }}  
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , dev , etc' /></div>
                    </div>

                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea 
                        value={taskDescription}
                        onChange={(e)=>{
                            seTaskDescription(e.target.value)
                        }}  
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea></div>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </form>
            </div>
  )
}

export default CreateTask
