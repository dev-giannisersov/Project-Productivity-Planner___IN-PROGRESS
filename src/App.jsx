import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import WeekView from './pages/WeekView.jsx';
import AddView from './pages/AddView.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WeekView />
    },
    {
      path: "/Add",
      element: <AddView />
    },{
      path: "*",
      element: <PageNotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
