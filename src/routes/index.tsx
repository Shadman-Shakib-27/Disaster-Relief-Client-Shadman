import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import NotFound from "@/components/shared/404";
import Login from "@/pages/Login/Login";
import Registration from "@/pages/Registration/Registration";
import CreatePost from "@/pages/dashboard/CreatePost";
import Dashboard from "@/pages/dashboard/Dashboard ";
import Supplies from "@/pages/dashboard/Supplies";
import UpdatedPost from "@/pages/dashboard/UpdatedPost";
import Home from "@/pages/home/Home";
import AllPost from "@/pages/home/posts/AllPost";
import Donation from "@/pages/home/posts/Donation";
import ViewDetails from "@/pages/home/posts/ViewDetails";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <AllPost />,
      },
      {
        path: `/view-details/:id`,
        element: <ViewDetails />,
      },
      {
        path: `/donate/:id`,
        element: <Donation />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreatePost />,
      },
      {
        path: "update-supply/:id",
        element: <UpdatedPost />,
      },
    ],
  },
]);

export default router;
