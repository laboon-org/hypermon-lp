import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  concat,
  HttpLink,
} from "@apollo/client";
import App from "./App";
import "./styles/index.scss";

const httpLink = new HttpLink({ uri: "https://gapi.storyblok.com/v1/api" });
 
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: process.env.REACT_APP_PREVIEW_TOKEN,
      version: "draft",
    },
  }));
  return forward(operation);
});
 
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
console.log("client check----", client);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
