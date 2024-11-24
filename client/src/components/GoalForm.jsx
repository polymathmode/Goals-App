import {useState} from "react"
import { useSelector,useDispatch } from "react-redux"
import { addGoals } from "../features/goals/goalsSlice"



function GoalForm() {

    const [text,setText]=useState("")
    const dispatch=useDispatch()

    const onSubmit=(e)=>{
    e.preventDefault()
    dispatch(addGoals({text}))
    setText("")
    }

    const onChange=(e)=>{
        setText(()=>
            e.target.value
        )
    }
  return (
    <section>
        <form className="form" onSubmit={onSubmit}>
    <div className="form-group">
       <label className="">
        <input 
        type="text"
        name="text"
        value={text}
        onChange={onChange}

         />
       </label>
    </div>        
    <div className="form-group">
        <button className="btn btn-block" type="submit">
          Add Goal
        </button>
    </div>

        </form>
    </section>
  )
}

export default GoalForm