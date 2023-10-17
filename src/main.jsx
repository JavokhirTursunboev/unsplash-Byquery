import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextFunc from "./context";
import "./index.css";

const queryClient = QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextFunc>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ContextFunc>
);
