import React from 'react'
import "./header.style.scss"
import {ReactComponent as Logo} from "../../assets/4.3 crown.svg.svg"
import {Link} from "react-router-dom"
const header = (props)=>
{

    return <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            
        </div>
    </div>
}
export default header