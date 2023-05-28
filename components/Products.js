import React from "react";
import {
  ImageBox,
  ProductMainBox,
  AddToCart,
  InfoBox,
} from "../styles/ProductStyle";
import { useShopContext } from "@/lib/context";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function Products({ product }) {
  const { title, price, image, slug } = product.attributes;
  const { onAdd } = useShopContext();
  const router = useRouter();

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Stop event propagation to prevent redirection
    onAdd(product.attributes, 1); // Add the product with a quantity of 1 to the cart
    notify();
  };

  const notify = () => {
    toast.success(`${title} added to your cart.`, {
      duration: 1500,
    });
  };

  const handleProductClick = () => {
    router.push(`/product/${slug}`);
  };

  return (
    <ProductMainBox onClick={handleProductClick}>
      <ImageBox>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </ImageBox>
      <InfoBox>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <AddToCart onClick={handleAddToCart}>Add to Cart</AddToCart>
      </InfoBox>
    </ProductMainBox>
  );
}

export default Products;
