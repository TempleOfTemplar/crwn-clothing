import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size ? size : ''} menu-item`} onClick={()=>window.history.push()}>
        <div className='background-image'  style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);