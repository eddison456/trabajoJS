import React from 'react'
import { UseForm } from '../hooks/UseForm'

const FormWhitHook = () => {
   const [values,handlerChanga]= UseForm({name:"", email:"", age:"", password:""});
    return  (<>
        <h1>form Whit Hook</h1>
        <hr />
        <input type="text" placeholder="your name" name="name" value={values.name}  onChange={handlerChanga} />
        <input type="email" placeholder="your email" name="email" value={values.email} onChange={handlerChanga} />
        <input type="age" placeholder="your age" name="age" value={values.age} onChange={handlerChanga} />
        <input type="password" placeholder="your password" name="password" value={values.password} onChange={handlerChanga} />
      </> 
      
  )
}

export default FormWhitHook