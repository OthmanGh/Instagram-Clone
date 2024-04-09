import React from 'react';
import './feed.css';
import Sidebar from './components/sidebar.jsx';
import MainContent from './components/main.jsx';
import Widget from './components/widget.jsx';

function Feed() {
  return (
    <div className="feed_container">
      <Sidebar />
      <MainContent />
      <Widget />
    </div>
  );
}

export default Feed;
