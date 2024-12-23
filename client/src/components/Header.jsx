import { Link } from "react-router-dom"
import {FaSignInAlt,FaSignOutAlt,FaUser} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { reset,login,logout} from "../features/auth/authSlice"


function Header() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>
      state.auth
  )

  const onlogOut=()=>{
    dispatch(logout(user))
    dispatch(reset())
    navigate("/")
    
  }

  return (
    <>
    <header className="header">
    <div className="logo">
    <Link to="/">
    Goalsetter
    </Link>
    </div>
    <ul>
      {user ? (
        <>
          <li>
        <button className="btn"  onClick={onlogOut}>
        <FaSignOutAlt/>Logout
        </button>
      </li>
        </>
      ) : (
        <>
        <li>
        <Link to="/login">
        <FaSignInAlt/>Login
        </Link>
      </li>
      <li>
        <Link to="/register">
        <FaUser/>Register
        </Link>
      </li>
        </>
      )}
   
    </ul>
    </header>

    </>
    
  )
}

export default Header