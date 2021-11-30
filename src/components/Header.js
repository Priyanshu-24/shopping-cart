import React from "react";
import { Link } from "react-router-dom";

function Header({cartItem}) {
    return (
        <div className = "header">
            <h1>Your DOG SHOP</h1>
            <Link to = "/"><div>HOME</div></Link>
            <Link to = "/shop"><div>SHOP</div></Link>
            <Link to = "/cart"><div className = "cart-icon">CART{cartItem.length !== 0 ? <div className ="cart-no">{cartItem.length}</div> : <div></div>}</div></Link>
        </div>
    )
}

export default Header;
