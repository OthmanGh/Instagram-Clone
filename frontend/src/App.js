import React from 'react';
import './styles/utilities.css';
import './styles/index.css';
import './styles/colors.css';
import Authentication from './Pages/Authentication';
import Feed from './Pages/Feed';
import Content from './Pages/Feed/components/content';
import Profile from './Pages/Feed/components/profile';
import Widget from './Pages/Feed/components/widget';

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
