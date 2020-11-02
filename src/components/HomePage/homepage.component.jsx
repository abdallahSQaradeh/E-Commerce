import React from 'react';
import "./homepage.style.scss"
const homePage = (props)=>
{

    return (
        <div className="homepage">
            <div className="directory-menu">
                <div class="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
           
            </div>
        </div>)
}
export default homePage