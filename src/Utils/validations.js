import { toast } from "react-toastify";
let text = ''

export const OnlyAlphabets = (value) =>{
    let val = value;
    const reg = /^[A-Za-z ]+$/;

    if(val.trim().length > 0 || val.length > 0){
        if(!reg.test(val)){
            text = val
            return true
        }
        else{
            text = val
            return false
        }
    }
}


export const EmailValidation = (value) =>{
    let val = value;
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(val.trim().length > 0){
        if(!reg.test(val)){
            return true
        }
        else{
            return false
        }
    }
    else
    {
        return false
    }
}


export const NumberValidation = (value) =>{
    let val = value;
    const reg = /^[0-9]+$/;

    if(val.trim().length > 0){
        if(!reg.test(val)){
            return true
        }
        else{
            return false
        }
    }
    else
    {
        return false
    }
}


export const PasswordValidation = (value) =>{
    let val = value;
    const passReg = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,64}$/;

    if(val.trim().length > 0){
        if(val.trim().length >= 8 && passReg.test(val.trim()))
        {
            return false
        }
        else{
            return true
        }
    }
    else{
        return null
    }
}


export const Required = (fldName,fldValue) =>{
    if(fldValue.trim() === '' || fldValue === ''){
        toast.error(fldName + ' is required', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId:"web-requird-validation"
        })

    }
    else{
        return true
    }
}


export const RequiredArray =(field , value) =>{
    if(value.length == 0){
        toast.error(field + ' is required', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId:"web-requird-validation"
        })
    }else{
        return true
    }
}

export const RequiredFile = (field , value) =>{

    if(value===null ||value===undefined ){
        toast.error(field + ' is required', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId:"web-requird-validation"
        })
    }else{

            return true
    }
}