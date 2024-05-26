import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { Provider } from "react-redux";
import ScrollBar from "./components/shared/ScrollBar.tsx";
import { Toaster } from "sonner";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { store } from "./redux/features/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
        <ScrollBar />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
