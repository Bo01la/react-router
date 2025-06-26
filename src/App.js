import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

const routs = createBrowserRouter([
  // the path for (RootLayout) is absolute while the path for all (children) is relative
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "", // making this is the home oage
      //   element: <Home />,
      // },
      {
        index: true, // another way to set a page as the default for home page
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routs} />;
}

export default App;
