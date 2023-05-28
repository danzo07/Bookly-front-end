import { useShopContext } from "@/lib/context";
import getStripe from "@/lib/getStripe";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
  Cards,
} from "@/styles/CartStyles";
import { Quantity } from "@/styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai"
const { motion } = require("framer-motion");

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};
const cardsVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};



function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useShopContext();

  //Payment
  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        animate={{ x: "0%" }}
        initial={{ x: "50%" }}
        exit={{ x: "0%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose className="close" onClick={() => setShowCart(false)}/>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Empty cart</h1>
          </EmptyStyle>
        )}
        <Cards
          variants={cardsVariants} // Use cardsVariants instead of cards
          initial="hidden"
          animate="show"
          layout
        >
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card variants={cardVariants} key={item.slug} layout>
                  <div>
                    <img src={item.image.data.attributes.formats.small.url} />
                  </div>
                  <CardInfo>
                    <h3>{item.title}</h3>
                    <h3>{item.price}$</h3>
                    <Quantity>
                      <span>Quantity</span>
                      <button onClick={() => onRemove(item)}>
                        <AiFillMinusCircle />
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => onAdd(item, 1)}>
                        <AiFillPlusCircle />
                      </button>
                    </Quantity>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: {totalPrice}$</h3>
            <button onClick={handleCheckout}>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}

export default Cart;
