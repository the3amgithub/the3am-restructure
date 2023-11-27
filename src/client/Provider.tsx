"use client";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',

  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
