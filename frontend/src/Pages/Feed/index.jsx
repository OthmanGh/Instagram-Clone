import React from 'react';
import './feed.css';
import RoundedImage from '../../components/RoundedImg/index.jsx';

import {
  HomeIcon,
  SearchIcon,
  ExploreIcon,
  MessageIcon,
  HeartIcon,
  AddIcon,
  ThreadIcon,
  HamMenuIcon,
  ReelIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
} from './export.js';

function Feed() {
  return (
    <div className="feed_container">
      <Sidebar />
      <Main />
      <Widget />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar_container flex column a-start j-s__between">
      <h2>Instagram</h2>
      <ul>
        <NavItem Icon={HomeIcon} iconClass={'custom_sidebar_icon'} text="Home" />

        <NavItem Icon={SearchIcon} iconClass={'custom_sidebar_icon'} text="Search" />

        <NavItem Icon={ExploreIcon} iconClass={'custom_sidebar_icon'} text="Explore" />

        <NavItem Icon={ReelIcon} iconClass={'custom_sidebar_icon'} text="Reels" />

        <NavItem Icon={MessageIcon} text="Message" iconClass={'custom_sidebar_icon'} />

        <NavItem Icon={HeartIcon} text="Notifications" iconClass={'custom_sidebar_icon'} />

        <NavItem Icon={AddIcon} text="Create" iconClass={'custom_sidebar_icon'} />

        <NavItem
          text="Profile"
          iconClass={'custom_sidebar_icon'}
          profile_img={true}
          imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
          alt="profile image"
          imgClass="s_r_img"
        />
      </ul>

      <ul className="bottom_links">
        <li>
          <ThreadIcon className="custom_sidebar_icon" />
          <p>Threads</p>
        </li>

        <NavItem Icon={HamMenuIcon} iconClass={'custom_sidebar_icon'} text="More" />
      </ul>
    </aside>
  );
}

function NavItem({ Icon, iconClass, text, profile_img, imgSrc, alt, imgClass }) {
  return (
    <li>
      {profile_img && <img className={imgClass} src={imgSrc} alt={alt} />}
      {Icon && <Icon className={iconClass} />}
      <p>{text}</p>
    </li>
  );
}

function Main() {
  return <main>Main Content</main>;
}

function Widget() {
  return <aside>Widget</aside>;
}

export default Feed;
