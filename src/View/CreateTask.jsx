import { Button, Input, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Style.css'
import { toast } from "react-toastify";
import { baseURL } from '../Utils/config';
import { useNavigate } from 'react-router-dom'
import { Required } from '../Utils/validations';
import { getUser, saveUser } from '../Utils/storage';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CreateTask = () => {

    const [title, setTitle] = useState('')
    const [taskType, setTaskType] = useState('')
    const [taskLevel, setTaskLevel] = useState('')

    const navigate = useNavigate()

    const addEmployee = async () => {
        let user = await getUser()
        if(
            Required('Title' ,title) &&
            Required('Task Type' , taskType) &&
            Required('Task Level' , taskLevel)
        ){
            fetch(baseURL+'/task/createTask' ,{
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify({
                    title,
                    taskType,
                    taskLevel,
                })
            }).then(res => res.json())
            .then(res2 => {
                if(res2?.status){
                    toast.success('Task Added')
                    navigate('/manager-board/'+JSON.parse(user)?.data?._id)
                }else{
                    toast.error(res2?.message)
                }
            })
            .catch(err => {
                toast.error(err?.message)
            })
        }
    }   

    const handleTaskTypeChange = (e) => {
        let v = e.target.value
        setTaskType(v)
    }
    const handleTaskLevelChange = (e) => {
        let v = e.target.value
        setTaskLevel(v)
    }

  return (
    <div className='page-bg' style={{ overflowY: 'scroll' }} >
    <Typography variant='h2' style={{ textAlign: 'center', marginTop: '1%', marginBottom: '1%' }}  >Create a new Task</Typography>
    <TextField required={true} value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} variant='outlined' color='primary' label='Title' />  <br />

    <br />
    <FormControl style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} >
        <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={taskType}
            label="Task Type"
            onChange={handleTaskTypeChange}
        >
            <MenuItem value={'Frontend'}>Frontend</MenuItem>
            <MenuItem value={'Backend'}>Backend</MenuItem>
            <MenuItem value={'Tester'}>Tester</MenuItem>
            <MenuItem value={'Designer'}>Designer</MenuItem>
        </Select>
    </FormControl>
    <br />
    <FormControl style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} >
        <InputLabel id="demo-simple-select-label">Task Level</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={taskLevel}
            label="Task Type"
            onChange={handleTaskLevelChange}
        >
            <MenuItem value={'Beginner'}>Beginner</MenuItem>
            <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
            <MenuItem value={'Expert'}>Expert</MenuItem>
        </Select>
    </FormControl>
    <br />
  
    <Button variant='contained' color='primary' style={{ width: '35%' }} onClick={addEmployee} >Add Task</Button> <br />

</div>
  )
}

export default CreateTask