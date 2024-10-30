import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"


function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const onChange = (e) => {
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
    const onSubmit=(e)=>{
        e.preventDefault()
    }
    const {  email, password } = formData

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt />Login
                </h1>
                <p>Sign in here</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
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

export default Login