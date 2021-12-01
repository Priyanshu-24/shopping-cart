import React from "react";

function Single({ item, addToCart, checkCart }) {
  return (
    <div className="shop-item">
      <div className="shop-item-heading">{item.name}</div>
      <img src={item.src} alt="breed" />
      <div>{item.price} /-</div>
      {checkCart[item.id - 1] === true ? (
        <button className = "already-added">Already added to the Cart</button>
      ) : (
        <button onClick={() => addToCart(item)}>Add To Cart</button>
      )}
    </div>
  );
}

export default Single;
