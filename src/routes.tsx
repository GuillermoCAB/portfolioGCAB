import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

// Pags
import { Home } from './pages';

// Components
import SEO from './components/SEO';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SEO title="test" description="Testing the SEO component">
          <Home />
        </SEO>
      ),
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
