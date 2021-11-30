import React from "react";

function Single({item, addToCart}) {

    return (
        <div className = "shop-item">
            <div className = "shop-item-heading">{item.name}</div>
            <img src = {item.src} alt = "breed"/>
            <div>{item.price} /-</div>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
        </div>
    )
}

export default Single;