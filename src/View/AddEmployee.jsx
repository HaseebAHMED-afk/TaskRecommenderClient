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

const AddEmployee = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [experience, setExperience] = useState('')

    const navigate = useNavigate()

    const addEmployee = async () => {
        let user = await getUser()
        if(
            Required('Email' , email) &&
            Required('Password' , password) &&
            Required('Name' , name) &&
            Required('Expertise' , expertise) &&
            Required('Type' , type) &&
            Required('Gender' , gender) &&
            Required('Age' , age) &&
            Required('Experience' , experience)
        ){
            fetch(baseURL+'/employee/addEmployee' ,{
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify({
                email,
                password,
                name,
                expertise,
                type,
                gender,
                age,
                experience,
                })
            }).then(res => res.json())
            .then(res2 => {
                if(res2?.status){
                    toast.success('Employee Added')
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

    const handleExpertiseChange = (e) => {
        let v = e.target.value
        setExpertise(v)
    }
    const handleTypeChange = (e) => {
        let v = e.target.value
        setType(v)
    }
    const handleGenderChange = (e) => {
        let v = e.target.value
        setGender(v)
    }

    return (
        <div className='page-bg' style={{ overflowY: 'scroll' }} >
            <Typography variant='h2' style={{ textAlign: 'center', marginTop: '1%', marginBottom: '1%' }}  >Add an Employee</Typography>
            <TextField required={true} value={name} onChange={(e) => setName(e.target.value)} style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} variant='outlined' color='primary' label='Name' />  <br />
            <TextField required={true} value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} variant='outlined' color='primary' label='Email' />  <br />
            <TextField required={true} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} variant='outlined' color='primary' label='Password' />  <br />

            <br />
            <FormControl style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} >
                <InputLabel id="demo-simple-select-label">Expertise</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={expertise}
                    label="Expertise"
                    onChange={handleExpertiseChange}
                >
                    <MenuItem value={'Beginner'}>Beginner</MenuItem>
                    <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                    <MenuItem value={'Expert'}>Expert</MenuItem>
                </Select>
            </FormControl>
            <br />
            <FormControl style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} >
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Type"
                    onChange={handleTypeChange}
                >
                    <MenuItem value={'Frontend'}>Frontend</MenuItem>
                    <MenuItem value={'Backend'}>Backend</MenuItem>
                    <MenuItem value={'Tester'}>Tester</MenuItem>
                    <MenuItem value={'Designer'}>Designer</MenuItem>
                </Select>
            </FormControl>
            <br />
            <FormControl style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} >
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Type"
                    onChange={(handleGenderChange)}
                >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
            </FormControl>
            <br />
            <TextField required={true} type={'number'} value={age} onChange={(e) => setAge(e.target.value)} style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} variant='outlined' color='primary' label='Age' />  <br />
            <TextField required={true} type={'number'} value={experience} onChange={(e) => setExperience(e.target.value)} style={{ margin: 'auto', marginTop: '1%', marginBottom: '1%', width: '40%' }} variant='outlined' color='primary' label='Experience' />  <br />

            <Button variant='contained' color='primary' style={{ width: '35%' }} onClick={addEmployee} >Add Employee</Button> <br />

        </div>
    )
}

export default AddEmployee