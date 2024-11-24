import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import goalService, { createGoals } from  "./goalService"

const goals=JSON.parse(localStorage.getItem("goals"))
const initialState={
    goals:goals ? goals : [],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
    
}

export const addGoals=createAsyncThunk("goals/createGoals",async(goals,thunkApi)=>{
    const token=thunkApi.getState().auth.user.token
try{
    return  await goalService.createGoals(goals,token)

}
catch(error){
const message=error.response || 
error.response.data || error.response.data.message
 || error.message || error.toString()
 return thunkApi.rejectWithValue(message)

}

})


export const goalSlice=createSlice({
     name:"goals",
     initialState,
     reducers:{
        reset:(state)=> initialState
         
        
     },
   extrareducers:(builder)=>{
       builder
       .addCase(addGoals.pending,(state)=>{
       state.isLoading=true
       })
       .addCase(addGoals.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.goals=null
        state.message=action.payload
       })
       .addCase(addGoals.fulfilled,(state,action)=>{
        state.isSuccess=true
        state.isLoading=false
        state.goals=action.payload

       })
   }
})
    





export const {reset} =goalSlice.actions
export default goalSlice.reducer