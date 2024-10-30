import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"


function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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
    const { name, email, password, confirmPassword } = formData

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
                                name="password"
                                value={password}
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