import { Button, Input, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { baseURL } from '../Utils/config'
import './Style.css'
import { toast } from "react-toastify";
import { getUser, removeUser } from '../Utils/storage'
import { BasicCard } from '../Components/UI'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useNavigate} from 'react-router-dom';

const EmployeeBoard = () => {

    let [user , setUser] = useState()

    let [tasks , setTasks] = useState()

    const navigate = useNavigate()

    const fetchTasks = async () =>{
        let user = await getUser()
        fetch(baseURL+'/task/getTaskByEmployees/'+JSON.parse(user)?.data?._id , {
            method:'GET',
        }).then(res => res.json())
        .then(res2 =>{
            if(res2?.status){
                setTasks(res2?.message)
            }else{
                toast.error(res2?.message)
            }
        }).catch(err =>{
            toast.error(err?.message)
        })
    }

    const logout = async () =>{
        await removeUser()
        navigate('/')
    }

    useEffect(() =>{
        (
            async () =>{
                let user = await getUser()
                setUser(JSON.parse(user)?.data);
            }
        )()
        fetchTasks()
    } , [])

    const completeTask = async (id) =>{
        fetch(baseURL+'/task/finishTask' ,{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
               taskId: id
            })
        })
        .then(res => res.json())
        .then(res2 =>{
            if(res2?.status){
                toast.success('Task Updated')
                fetchTasks()
            }else{
                toast.error(res2?.message)
            }
        })
        .catch(err =>{
            toast.error(err?.message)
        })
    }

  return (
    <div className='page-bg' >
    <Typography variant='h2' style={{textAlign:'center' , marginTop:'5%'}}  >Hi , {user?.name}  </Typography>
    <Typography variant='body1' style={{textAlign:'center' , marginTop:'2%' , marginBottom:'3%'}}  >Let's see whats going on today.</Typography>
    <div className='task-grid' >
    <Grid container spacing={2} >
    {
        tasks && tasks.map((task , i) =>{
            return (
                <Grid item xs={12} sm={12} md={6} lg={4} >
                    <BasicCard key={i} onClick={() => completeTask(task?._id)} taskTitle={task?.title} taskType={task?.taskType} taskStatus={task?.taskStatus} taskLevel={task?.taskLevel} />
                </Grid>
            )
        } )
    }
    </Grid>
    </div>
    <Button size="small" onClick={logout} >Log Out</Button>
</div>
  )
}

export default EmployeeBoard