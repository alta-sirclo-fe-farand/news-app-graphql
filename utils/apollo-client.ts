import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://concrete-ocelot-10.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "jRBszFGwkrsnEZ2gKlx7THiUp4G3h9c6thYpQOeeWJHBbrCfqBPkSOMsxF4hSANc",
  },
  cache: new InMemoryCache(),
});

export default client;
