import React from "react";
import Nav from "@/components/Nav";
import { ShopProvider } from "@/lib/context";
import "@/styles/globals.css";
import { Provider, createClient } from "urql";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from "react-hot-toast";


const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ShopProvider>
        <Provider value={client}>
          <Toaster/>
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </ShopProvider>
    </UserProvider>
  );
}
