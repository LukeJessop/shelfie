import React from 'react'

function Product(props) {
    let {name, price, imgUrl} = props.item
    return(
        <div className="product">
            <img></img>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </div>
    )
}

export default Product