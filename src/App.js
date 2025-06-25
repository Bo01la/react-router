import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root"; 

import ErrorPage from "./pages/ErrorPage";// imoporting the ErrorPage component

const routs = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // adding the ErrorPage component to "errorElement" property
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routs} />;
}

export default App;
