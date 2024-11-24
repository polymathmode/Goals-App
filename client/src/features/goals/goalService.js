import axios from "axios"

const API_URL='/api/goals'

export const createGoals=async(goalData,token)=>{
    const config={
        headers:{
            Authorization:Bearer `${token}`
        }
    }
    const response=await axios.post(API_URL,goalData,config)
    console.log(response.data)
    if(response.data){
localStorage.setItem("goals",JSON.stringify(response.data))

    }
return response.data
}


 const goalService={
createGoals
}

export default goalService