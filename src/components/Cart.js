import React from "react";
import SingleCartItem from "./SingleCartItem";

function Cart({cartItem, removeCart, decreaseQuantity, increaseQuantity}) {
    return (
        <div>
            {cartItem.length === 0 ? <div className = "empty-cart">Nothing to Show... ADD items to the cart</div>
            :
            <div className = "shop">
            {
                cartItem.map((e)=>{
                    return (
                        <SingleCartItem  
                        key = {e.name}
                        item = {e}
                        removeCart = {removeCart}
                        decreaseQuantity = {decreaseQuantity}
                        increaseQuantity = {increaseQuantity}
                        />
                    )
                })
            }
            </div>
            }
        </div>
    )
}

export default Cart;
