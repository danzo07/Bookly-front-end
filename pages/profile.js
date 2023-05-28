import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import Stripe from "stripe";
import formatMoney from "@/lib/formatMoney";


const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SERCRET_KEY}`);

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const stripeId =
      session?.user?.[`${process.env.BASE_URL}/stripe_customer_id`];

    console.log("session:", session);
    console.log("user:", session?.user);
    console.log("stripeId:", stripeId);

    if (!session || !session.user || !stripeId) {
      console.log("Missing session, user, or stripeId");
      return { props: { orders: [] } };
    }

    try {
      const paymentIntents = await stripe.paymentIntents.list({
        customer: stripeId,
      });

      return { props: { user: session.user, orders: paymentIntents.data } };
    } catch (error) {
      console.error("Error retrieving orders:", error);
      return { props: { user: session.user, orders: [] } };
    }
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  console.log(user)
  return (
    user && (
      <ProfileWrapper>
        <ProfileBox>
          <img src={user.picture} alt="" />
          <p>{user.given_name}</p>
        </ProfileBox>
        <div>
          {orders.map((order) => (
            <Order key={order.id}>
              <div>
                <h2>Order number : {order.id}</h2>
                <h2>Order amount : {formatMoney(order.amount)}</h2>
              </div>
              <div>
                <h2>Receipt email : {order.receipt_email}</h2>
              </div>
            </Order>
          ))}
        </div>
        <Logout onClick={() => route.push("/api/auth/logout")}>Log out</Logout>
      </ProfileWrapper>
    )
  );
}

const ProfileWrapper = styled.div`
  margin: 7rem 15rem;
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #00000049 ;
  }
`;
const ProfileBox = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;



const Order = styled.div`
  background: var(--primary);
  margin: 2rem 0rem;
  padding: 1rem;
  h1 {
    font-size: 1rem;
    color: var(--secondary);
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1rem;
    color: var(--secondary);
  }
`;

const Logout = styled.button`
  display: block;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  background: var(--secondary);
  color: white;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
`;
