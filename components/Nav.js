
import { NavStyle, NavBox } from "@/styles/NavStyles";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useShopContext } from "@/lib/context";
import Cart from "./Cart";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client";
const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQuantitys } = useShopContext();
  // const { user, error, isLoading } = useUser();
  return (
    <NavStyle>
      <NavBox>
        <Link href={"/"}>Bookly</Link>
        <div onClick={() => setShowCart(true)}>
          {totalQuantitys > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantitys}
            </motion.span>
          )}
          <FiShoppingBag />
        </div>
        <User />
      </NavBox>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyle>
  );
}
