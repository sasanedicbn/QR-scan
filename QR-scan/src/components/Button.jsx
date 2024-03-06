// import { useState } from "react";
import '../App.css'
const Button = ({children, show}) => {

    return(
    <button className={`button ${show ? 'disabled': 'active'}`} disabled={show} >{children}</button>
    )
}
export default Button;