import React from 'react'
import AcceptTask from './AcceptTask'
import Newtask from './Newtask'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5  mt-10'>
            {data.tasks.map((elem, idx)=>{
                if(elem.active){
                    return <AcceptTask key = {idx} data = {elem}/>
                }
                if(elem.newtask){
                    return <Newtask key = {idx} data = {elem}/>
                }
                if(elem.completed){
                    return <CompleteTask key = {idx} data = {elem}/>
                }
                if(elem.failed){
                    return <Failedtask key = {idx} data = {elem}/>
                }

            })}
        </div>
    )
}

export default TaskList
