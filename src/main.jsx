import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Home';
import Footer from './Footer';
import Section4 from './Section4';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/",
        element:<Footer></Footer>
      },
      {
        path:"/4",
        element:<Section4></Section4>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(



<React.StrictMode>
<div className='mx-auto max-w-screen-xl'>
<RouterProvider router={router} />
</div>
  </React.StrictMode>,
)
