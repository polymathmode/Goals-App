import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector } from "react-redux"
import GoalForm from '../components/GoalForm'


function Dashboard() {
  const navigate=useNavigate()
  // const {user}=useSelector((state)=>state.auth)
  const { user } = useSelector((state) => state.auth?.user || {});


  useEffect(()=>{
if(!user){

   navigate('/login')
}
  },[user,navigate])

  return (
    <>
  <section className='heading'>
    <h1>Welcome {user?.name || "Guest"}</h1>
    <p>Goals Dashboard</p>

  </section>
  <GoalForm/>

    </>
  )
}

export default Dashboard