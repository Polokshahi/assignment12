import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "./Provider/Authprovider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./Router/Router.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(routes); // Define your routes properly

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authprovider>
  </StrictMode>
);
