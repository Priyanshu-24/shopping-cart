import React from "react";

function Single({item, addToCart, checkCart}) {

    return (
        <div className = "shop-item">
            <div className = "shop-item-heading">{item.name}</div>
            <img src = {item.src} alt = "breed"/>
            <div>{item.price} /-</div>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
            {checkCart[item.id-1] === true ? <div>*Exists in Cart</div> : <div></div>}
        </div>
    )
}

export default Single;