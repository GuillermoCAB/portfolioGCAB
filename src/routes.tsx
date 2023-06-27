import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SEO from "./components/SEO";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SEO title="test" description="Testing the SEO component">
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </SEO>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
