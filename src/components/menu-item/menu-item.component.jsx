import React from 'react';
import "./menu-item.style.scss"
const menuItem = ({title, url,size})=>
{
    return (
        <div
         className={`menu-item ${size}`}>
            <div className={"background-image"}
            
            style={
                {backgroundImage:`url(${url})`}
            }/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        )
}
export default  menuItem;