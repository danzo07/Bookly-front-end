import { GET_PRODUCT_QUERY } from "@/lib/query";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
  ImageBox,
} from "@/styles/ProductDetails";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useShopContext } from "@/lib/context";
import toast from "react-hot-toast";
import { useEffect } from "react";


export default function ProductDetails() {
  const { qty, increaseQty, decreaseQty, onAdd,setQty } = useShopContext();

    const resetQuantity = () => {
      setQty(1);
    };
    useEffect(() => {
      resetQuantity();
    }, []);

  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { fetching, data, error } = results;

  if (fetching) return <p>loading..</p>;
  if (error) return <p>ops {error.message}</p>;
  const { title, description, image } = data.products.data[0].attributes;

  //Create Toast
  const notify = () => {
    toast.success(`${title} added to your cart.`, {
      duration: 1500,
    });
  };
  return (
    <main>
      <DetailsStyle>
        <ImageBox>

            <img src={image.data.attributes.formats.medium.url} alt="" />

        </ImageBox>
        <ProductInfo>
          <h3>{title}</h3>
          <p>{description}</p>
          <Quantity>
            <span>Quantity</span>
            <button>
              <AiFillMinusCircle onClick={decreaseQty} />
            </button>
            <p>{qty}</p>
            <button>
              <AiFillPlusCircle onClick={increaseQty} />
            </button>
          </Quantity>
          <Buy
            onClick={() => {
              onAdd(data.products.data[0].attributes, qty);
              notify();
            }}
          >
            Add to cart
          </Buy>
        </ProductInfo>
      </DetailsStyle>
    </main>
  );
}
