import { useState } from "react";
import "./Avatar.css"

const Avatar = (props)=>{

    const [enabledImg,setEnabledImg]=useState(true);

    const imgClassDisabled = enabledImg ? "" : "disabled"
/*
    const handlerClick =() =>{

        alert("Click")
    }
*/
    return (<picture>
            <img className={imgClassDisabled} src={props.src} alt={props.name} /*onClick={handlerClick}*/ onClick={()=>setEnabledImg(!enabledImg)}/>
            {props.name}
            </picture>
            );
};

export default Avatar;