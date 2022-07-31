exports.saveUser = async (value) =>{
    try {
        let data = JSON.stringify(value)
         await localStorage.setItem('user',data)
        
    } catch (error) {
        console.log(error);
    }
}


exports.getUser = async () =>{
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

exports.removeUser = async () =>{
    try {
        await localStorage.removeItem('user')
    } catch (error) {
        console.log(error);
    }
}