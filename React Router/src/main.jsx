import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import App from './App';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [                       // children are nested routes with a route
      {
        element: <Home />,
        index: true                   // index route does not need any path
      },
      {
        path: "about",                // path can be defined relative to the parent path
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

