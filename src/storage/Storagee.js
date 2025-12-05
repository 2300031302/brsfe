export const BE_URL = "http://localhost:6309";

export const addUser= async(userData)=>{
    try{
        const response = await fetch(`${BE_URL}/users/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        });
        if(!response.ok){
            throw new Error("Failed to add user");
        }
    }catch(error){
        console.error(error);
    }
};

export const  getUsers = async()=>{
    try{
        const response = await fetch(`${BE_URL}/users`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(!response.ok){
            throw new Error("Failed to fetch users");
        }  
    }catch(error){
        console.error(error);
    }
};

