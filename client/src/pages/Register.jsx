import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {reset,register} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Register() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>
    state.auth)
  const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    })
    const onChange = (e) => {
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
        navigate("/")
    }
    dispatch(reset())
    },[user,isError,isSuccess,message,navigate,dispatch])
    const onSubmit=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error(`Passwords do not match`)
        }else{
            const userData={
                name,
                email,
                password
            }
    dispatch(register(userData))
        }
        
    }
    const { name, email, password, confirmPassword } = formData
    if(isLoading){
      return  <Spinner/>
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser />Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange}
                        />
                        <div className="form-group">

                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                placeholder="Enter your email-address"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">

                            <input
                                className="form-control"
                                id="password"
                                type="text"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">

                            <input
                                className="form-control"
                                id="password2"
                                type="text"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Re-enter your password"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block">
                                Submit
                                </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register