// import { useState } from "react";
import '../App.css'
const Button = ({children, disabledBtn}) => {

    return(
    <button className={`button ${disabledBtn ? '': 'disabled'}`} disabled={disabledBtn} >{children}</button>
    )
}
export default Button;