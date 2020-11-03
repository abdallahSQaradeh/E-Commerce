import React from 'react'
import "./collection-item.style.scss"

const collectionItem = ({id,name,price,imageUrl})=>
{

    return (<div className="collection-item">

        <div className="image"
            style={{
                    backgroundImage:`url(${imageUrl})`
                    }}/>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <span className="price">{price}</span>
            </div>
        </div>
   )
}
export default collectionItem;