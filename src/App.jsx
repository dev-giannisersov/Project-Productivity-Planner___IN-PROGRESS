import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';


import Layout from './components/Layout.jsx';

import YearView from './pages/YearView.jsx';
import DayView from './pages/DayView.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <DayView />},
      {path: "Year", element: <YearView />},
      {path: "Day", element: <DayView />},
    ]
    },
    {path: "*", element: <PageNotFound />}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
