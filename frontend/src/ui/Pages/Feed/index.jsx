import React from 'react';
import './feed.css';
import Content from './components/content.jsx';
import Widget from './components/widget.jsx';
import Sidebar from '../../components/SideBar/index.jsx';
import { Outlet } from 'react-router-dom';

function Feed() {
  return (
    <div className="feed_container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Feed;
