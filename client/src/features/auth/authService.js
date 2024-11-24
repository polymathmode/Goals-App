// import axios from "axios"




// const API_URL="/api/users/"

// const register=async(userData)=>{
//  try{
//     const response=axios.post(API_URL,userData)
//        console.log(response.data)
//     if(response.data){
//        localStorage.setItem("user", JSON.stringify(response.data))
//     }
//     return response.data
//  }catch(error){
//     if(error){
//     }
//  }
// }


import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
    console.log(response.data)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

 // Login user
 const login=async(userData)=>{
    const response=await axios.post(API_URL + "logIn",userData)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }
    return response.data
 }


 //Logout
 const logout=()=>{

        localStorage.removeItem("user")
    
 }



 const authService={
    register,
    login,
    logout
}

export default authService