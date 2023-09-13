import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'

import '@tabler/core/dist/js/tabler.min.js'
import '@tabler/core/dist/js/demo.min.js'

import Blank from '@pages/Blank'
import SomePlace from '@src/pages/SomePlace'
import ErrorPage from '@src/pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blank />,
    errorElement: <ErrorPage />
  },
  {
    path: "/someplace",
    element: <SomePlace />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
