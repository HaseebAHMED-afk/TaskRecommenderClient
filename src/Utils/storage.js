export const saveUser = async (value) =>{
    try {
        let data = JSON.stringify(value)
         await localStorage.setItem('user',data)
        
    } catch (error) {
        console.log(error);
    }
}


export const getUser = async () =>{
    try {
        let data = await localStorage.getItem('user')
        if(!data){
            return null
        }else{
            return data
        }
    } catch (error) {
        console.log(error);
    }
}

export const removeUser = async () =>{
    try {
        await localStorage.removeItem('user')
    } catch (error) {
        console.log(error);
    }
}