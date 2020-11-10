import React from 'react';
import  "./custom-button.style.scss"
const customButton = ({children,isGoogleSignIn, ...otherprops})=>
{
    return (
        <button className={`${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...otherprops}>
            {children}
        </button>
    );
}
export default  customButton;