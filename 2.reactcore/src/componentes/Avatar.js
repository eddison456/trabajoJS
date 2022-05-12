import { useState } from "react";
import "./Avatar.css"

const Avatar = (props)=>{

    const [enabledImg,setEnabledImg]=useState(true);
    const pictureSIZe =props.size !== "" ? `is-${props.size}` : ""
    const imgClassDisabled = enabledImg ? "" : "disabled"
/*
    const handlerClick =() =>{

        alert("Click")
    }
*/
    return (<picture  className={pictureSIZe}>
            <img className={imgClassDisabled} src={props.src} alt={props.name} /*onClick={handlerClick}*/ onClick={()=>setEnabledImg(!enabledImg)}/>
            {props.name}
            </picture>
            );
};

export default Avatar;