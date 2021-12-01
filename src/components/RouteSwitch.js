import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";

import beagle from "../images/beagle.jpg";
import boxer from "../images/boxer.jpg";
import dachshund from "../images/dachshund.jpg";
import dalmatian from "../images/dalmatian.jpg";
import doberman from "../images/doberman.jpg";
import german_shepherd from "../images/german-shepherd.jpg";
import golden_retriever from "../images/golden-retriever.jpg";
import great_dane from "../images/great-dane.jpg";
import labrador from "../images/labrador.jpg";
import pomeranian from "../images/pomeranian.jpg";
import pug from "../images/pug.jpg";
import rottweiler from "../images/rottweiler.jpg";

function RouteSwitch() {

  const items = [
    { name: "Beagle", src: beagle, id: 1, price: 10000 },
    { name: "Boxer", src: boxer, id: 2 , price: 12000},
    { name: "Dachshund", src: dachshund, id: 3, price: 15000 },
    { name: "Dalmatian", src: dalmatian, id: 4 , price: 11000},
    { name: "Doberman", src: doberman, id: 5, price: 16000 },
    { name: "German Shepherd", src: german_shepherd, id: 6 , price: 18000},
    { name: "Golden Retriever", src: golden_retriever, id: 7, price: 14000 },
    { name: "Great Dane", src: great_dane, id: 8, price: 11000 },
    { name: "Labrador", src: labrador, id: 9 , price: 13000},
    { name: "Pomeranian", src: pomeranian, id: 10, price: 8000 },
    { name: "Pug", src: pug, id: 11 , price: 7000},
    { name: "Rottweiler", src: rottweiler, id: 12 , price: 17000},
  ];


  const [cartItem, setCartItem] = useState([]);
  const [checkCart, setCheckCart] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);  

  const addToCart = (e) => {

    let idx = cartItem.map((x) => x.id).indexOf(e.id);
    
    const newCheck = [...checkCart];
    newCheck[e.id-1] = true;
    setCheckCart(newCheck);

    
    if (idx === -1)
      setCartItem(cartItem.concat({ ...e, ...{ quantity: 1 } }));
    
    else {

      const newItem = [...cartItem];
      newItem[idx].quantity++;
      setCartItem(newItem);

    }
  };

  const removeCart = (e) => {

    let idx = cartItem.map((x) => x.id).indexOf(e.id);

    const newCheck = [...checkCart];
    newCheck[e.id-1] = false;
    setCheckCart(newCheck);

    if (idx !== -1) {

      const newCartItems = [...cartItem];
      newCartItems.splice(idx, 1);
      setCartItem(newCartItems);

    }
  };

  const decreaseQuantity = (item) => {

    if(item.quantity === 1)
    removeCart(item);

    else{
      let idx = cartItem.map((x) => x.id).indexOf(item.id);
      const newCart = [...cartItem];
      newCart[idx].quantity--;
      setCartItem(newCart);
    }

  }

  const increaseQuantity = (item) => {

    addToCart(item);

  }



  return (
    <BrowserRouter>
      <Header cartItem = {cartItem}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/shop"
          element={<Shop items={items} addToCart={addToCart} checkCart = {checkCart}/>}
        />
        <Route
          exact
          path="/cart"
          element={<Cart cartItem={cartItem} removeCart={removeCart} checkCart = {checkCart} decreaseQuantity = {decreaseQuantity} increaseQuantity = {increaseQuantity}/> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
