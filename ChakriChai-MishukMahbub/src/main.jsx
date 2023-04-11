import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Showcase from './components/Showcase';
import Stat from './components/Stat';
import Applied from './components/Applied';
import Blog from './components/Blog';
import jobsCategoryLoader from './loaders/jobsCategoryLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // loader: () => fetch("/jobs.json"),
    children: [
      {
        path: "/",
        element: <Showcase></Showcase>,
        loader: jobsCategoryLoader
      },
      {
        path: "statistics",
        element: <Stat></Stat>,
      },
      {
        path: "applied-jobs",
        element: <Applied></Applied>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
