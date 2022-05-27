import axios from "axios";

export async function fetchUsers(){
    try{
        const apiUrl = 'https://randomuser.me/api?results=10';
        const response = await axios.get(apiUrl);
        return response;
    }catch(err: any){
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }else{
            console.log(`error: ${err.message}`);
        }
    }   
}