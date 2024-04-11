import React from 'react';
import './ui/styles/utilities.css';
import './ui/styles/index.css';
import './ui/styles/colors.css';

import Authentication from './ui/Pages/Authentication';
import Feed from './ui/Pages/Feed';

import Content from './ui/Pages/Feed/components/content';
import Profile from './ui/Pages/Feed/components/profile';
import Widget from './ui/Pages/Feed/components/widget';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
  },

  {
    path: '/feed',
    element: <Feed />,
    children: [
      {
        path: '/feed',

        element: (
          <>
            <Content />
            <Widget />
          </>
        ),
      },

      {
        path: '/feed',
        element: <Widget />,
      },

      {
        path: '/feed/profile',
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
