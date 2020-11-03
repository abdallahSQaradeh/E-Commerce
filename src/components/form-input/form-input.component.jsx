import React from "react";
import "./form-input.style.scss"
const formInput = ({changeHandler, label, ...otherProps})=>
{

    
    return <div className="group">
        <input className="form-input" onChange={changeHandler} {...otherProps}/>

        {
            label?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>):
            null
        }
    </div>
        
        
}
export default formInput;