import React from "react";

function SingleCartItem({
  item,
  removeCart,
  decreaseQuantity,
  increaseQuantity,
}) {
  return (
    <div className="shop-item">
      <div className="shop-item-heading">{item.name}</div>
      <img src={item.src} alt="breed" />
      <div>Price: {item.price} /-</div>
      <div className="cart-quantity">
        <span className="add-to-cart" onClick={() => decreaseQuantity(item)}> - </span> {item.quantity}{" "}
        <span className="add-to-cart" onClick={() => increaseQuantity(item)}>
          {" "}
          +{" "}
        </span>
      </div>
      <div>
        <strong>Total amount: {item.price * item.quantity} /-</strong>
      </div>
      <button onClick={() => removeCart(item)}>Remove</button>
    </div>
  );
}

export default SingleCartItem;
