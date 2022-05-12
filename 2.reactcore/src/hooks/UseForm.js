import { useState } from "react"
export const UseForm = (initialState ={})=>{
    const [values, setvalues] = useState(initialState)

    const handlerChanga =({target : { name, value }})=>{
        setvalues({ ...values, [name]: value})
    }

    return [values,handlerChanga]

}
/*

const [frmState, setFrmState] = useState({name:"", email:""})

const handlerChanga =({target : { name, value }})=>{
    setFrmState({ ...frmState, [name]: value})
}

*/