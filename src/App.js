import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Home from "../src/components/Home";
import Login from "../src/components/pages/login/Login";
import Browse from "../src/components/pages/browse/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <Provider store={appstore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
