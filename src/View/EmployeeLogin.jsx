import { Button, Input, Link, TextField, Typography } from '@mui/material'
import React , {useState} from 'react'
import './Style.css'
import { toast } from "react-toastify";
import { baseURL } from '../Utils/config';
import { useNavigate } from 'react-router-dom'
import { Required } from '../Utils/validations';
import { saveUser } from '../Utils/storage';

const EmployeeLogin = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    const navigate = useNavigate()
    
    const login = async () =>{
        if(Required('Email' , email) && Required('Password' , password)){
            let body= JSON.stringify({
                email,
                password
            })
            fetch(baseURL+'/employee/loginEmployee' , {
                method:'POST',
                body,
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
            }).then(res => res.json())
            .then(async res2 => {
                if(res2?.status){
                    console.log(res2?.message);
                    await saveUser({data: res2?.message , role:'employee'})
                    navigate('/employee-board/'+res2?.message?._id)
                }else{
                    toast.error(res2?.message)
                }
            }).catch(err =>{
                toast.error(err.message)
            })
        }
    }
  return (
    <div className='page-bg' >
        <Typography variant='h2' style={{textAlign:'center' , marginTop:'5%' , marginBottom:'3%'}}  >Login as Employee</Typography>
        <TextField required={true} value={email} onChange={(e) =>setEmail(e.target.value)}  style={{margin:'auto' , marginBottom:'3%' , width:'40%'}} variant='outlined' color='primary' label='Email' />  <br />
    <TextField required={true} type={'password'} value={password} onChange={(e) =>setPassword(e.target.value)} style={{margin:'auto' , marginBottom:'3%' , width:'40%'}} variant='outlined' color='primary' label='Password' />  <br />
    <Button variant='contained' color='primary' style={{width:'35%'}} onClick={login} >Login</Button> <br />
        <a href='/' >Login as Manager??</a>
    </div>
  )
}

export default EmployeeLogin