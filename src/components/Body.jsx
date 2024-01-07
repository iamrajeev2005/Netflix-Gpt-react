import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "../components/pages/login/Login";
import Browse from "../components/pages/browse/browse";
import Signupform from "./pages/signup/Signupform";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <Signupform />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
