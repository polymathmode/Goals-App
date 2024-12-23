import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Login from "./pages/Login";
import Header from "./components/Header"

function App() {
  return (
    <>
    <ToastContainer/>
    <Router>
      <Header/>
     <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
    </Router>
    </>

 
  );
}

export default App;
