import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0/client";


function User() {
  const route = useRouter();
  const { user, error, isLoading } = useUser();
  if(!user)
  return (
    <div onClick={() => route.push("/api/auth/login")}>
      <AiOutlineUser />
      <h3>Guest</h3>
    </div>
  );
  return (
      <Profile onClick={()=> route.push("/profile")}>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
      </Profile>
  );
}

export default User;


const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: 0.5px solid #00000047;
  }
`;

  // return (
  //   <div>
  //     {user && (
  //       <>
  //         <h2>{user.name}</h2>
  //         <p>{user.email}</p>
  //         <div>
  //           {orders.map((order) => (
  //             <div key={order.id}>
  //               <h3>Order Number: {order.id}</h3>
  //               <p>Amount: {order.amount}</p>
  //               <p>Email: {order.receipt_email}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );