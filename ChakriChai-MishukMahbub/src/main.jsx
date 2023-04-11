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
import JobDetails from './components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Showcase></Showcase>,
        loader: () => fetch('/jobsCategory.json')
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
      {
        path: "job-details/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
