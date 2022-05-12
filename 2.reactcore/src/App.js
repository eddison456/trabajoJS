import React from "react";
import Avatar from "./componentes/Avatar";
import Form from "./componentes/Form";
import FormWhitHook from "./componentes/FormWhitHook";

const App = ()=>{

  const listUsers = [
    {
      id: 1,
      name: "Laura",
      path: "https://randomuser.me/api/portraits/women/1.jpg",
      size:"small",
    },
    {
      id: 2,
      name: "Maria",
      path: "https://randomuser.me/api/portraits/women/2.jpg",
      size:"",
    },
    {
      id: 3,
      name: "Ana",
      path: "https://randomuser.me/api/portraits/women/3.jpg",
      size:"large",
    },
  ]
 
  return (
    <>
    {listUsers.map ((user)=>(

      <Avatar key={user.id} name={user.name} size={user.size} src={user.path}/>
    ))}
    
    <Form/>
    <FormWhitHook/>
    </>

  )

};

export default App;


//rafce creacion de componente
