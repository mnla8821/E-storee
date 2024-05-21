import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import {
  Login,
  SignUp,
  SingleProduct,
  CardBag,
  Product,
  About,
  Home,
} from "../Pages";
import PrivateRoute from "../utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: ":p",
        element: <SingleProduct />,
      },

      {
        path: "/CardBag",
        element: <CardBag />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/About",
            element: <About />,
          },
        ],
      },
    ],
  },
]);

export default router;
