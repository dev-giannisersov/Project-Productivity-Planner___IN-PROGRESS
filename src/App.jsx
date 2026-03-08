import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';


import Layout from './components/Layout.jsx';

import WeekView from './pages/WeekView.jsx';
import AddView from './pages/AddView.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <WeekView />},
      {path: "week", element: <WeekView />},
      {path: "add", element: <AddView />},
    ]
    },
    {path: "*", element: <PageNotFound />}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
