import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"


//Get user from local storage
const user=JSON.parse(localStorage.getItem("user"))

const initialState={
    user:user ? user:null, //If there is a user in localstorage,use them,else return null
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

//Register

export const register=createAsyncThunk("auth/register",async(user,thunkApi)=>{
try{
   return await authService.register(user)


}catch(error){
const message=error.response || 
error.response.data || error.response.data.message
 ||error.message || error.toString()
 return thunkApi.rejectWithValue(message)
}
})

//Logout
//We could improve this by usina a server & set an http only cookie e.t.c
export const logout=createAsyncThunk("auth/logout",async(user,thunkApi)=>{
  try{
   return   authService.logout()

  }catch(error){
    const message=error.response || error.response.data 
    || error.response.data.message
     || error.message || error.toString()
     return thunkApi.rejectWithValue(message)
  }
  }
)


export const login=createAsyncThunk("auth/login",async(user,thunkApi)=>{
try{
  return await authService.login(user)

}catch(error){
const message=error.response || 
error.response.data || error.response.data.message
 || error.message || error.toString()
 return thunkApi.rejectWithValue(message)
} 
})

//Actual Slice
export const authSlice=createSlice({
   name:"auth",
   initialState,
   reducers:{    //These are not asynchronous or thunk fns
     reset:(state)=>{
         //Used to reset the state the default values
      state.isLoading=false;
      state.isError=false;
      state.isSuccess=false;
      state.message="";


     }             
   }, 
   extraReducers:(builder)=>{
   builder
   .addCase(register.pending,(state)=>{
    state.isLoading=true
   })
   .addCase(register.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.user=action.payload
   })
   .addCase(register.rejected,(state,action)=>{
    state.isLoading=false
      state.isError=true
      state.user=null
      state.message=action.payload
   })
   .addCase(login.pending,(state)=>{
    state.isLoading=true
   })
   .addCase(login.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.user=action.payload
   })
   .addCase(login.rejected,(state,action)=>{
    state.isLoading=false
      state.isError=true
      state.user=null
      state.message=action.payload
   })
   .addCase(logout.fulfilled,(state)=>{
    state.user=null
   })
  
   }  //These are asynchronous or thunk fns

})
export const {reset}=authSlice.actions
export default authSlice.reducer

