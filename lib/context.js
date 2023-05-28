import React, { createContext, useContext, useState } from "react";

// Create a context for the shop
const ShopContext = createContext();

// Create a custom hook to provide access to the shop context
export const useShopContext = () => useContext(ShopContext);

// Create a provider component to wrap the app and pass down the shop state and functions
export const ShopProvider = ({ children }) => {
  const [qty, setQty] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantitys, setTotalQuantitys] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const increaseQty = () => {
    setQty((pervQty) => pervQty + 1);
  };
  const decreaseQty = () => {
    if (qty > 0) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const onAdd = (product, quantity) => {
    //Total Price
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantitys((prevQty) => prevQty + quantity);
    //check if the poroduct is arleady in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };
  
  //Remove product
  const onRemove = (product) => {
    //Set Total Price
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
    //Remove from total quantities
    setTotalQuantitys((prevQty) => prevQty - 1);

    //Check if product exists
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  // Create an object to hold the shop state and functions
  const shopData = {
    qty,
    increaseQty,
    decreaseQty,
    onAdd,
    onRemove,
    showCart,
    setShowCart,
    cartItems,
    totalQuantitys,
    totalPrice,
    setQty,
  };

  // Pass the shopData object down to children using the ShopContext.Provider
  return (
    <ShopContext.Provider value={shopData}>{children}</ShopContext.Provider>
  );
};
