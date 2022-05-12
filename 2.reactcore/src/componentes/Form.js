import { useState } from "react";
const Form = () =>{

    const [frmState, setFrmState] = useState({name:"", email:""})

    const handlerChanga =({target : { name, value }})=>{
        setFrmState({ ...frmState, [name]: value})
    }

    

    return  (<>
      <h1>form</h1>
      <hr />
      <input type="text" placeholder="your name" name="name" value={frmState.name}  onChange={handlerChanga} />
      <input type="email" placeholder="your email" name="email" value={frmState.email} onChange={handlerChanga} />
    </> 
    )
}
export default Form;