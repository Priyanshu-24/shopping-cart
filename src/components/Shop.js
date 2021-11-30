import React from "react";
import Single from "./Single";

function Shop({items, addToCart}) {

    return (
        <div className = "shop">
            {items.map((e) => {
              return (
                  <Single
                  key = {e.id}
                  addToCart = {addToCart}
                  item = {e}/>
              )
            })}
        </div>
    )
}

export default Shop;
