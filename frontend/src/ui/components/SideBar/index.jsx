import React from 'react';
import './styles.css';
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
} from './export';

function Sidebar() {
  return (
    <div className="aside_container">
      <aside className="sidebar_container flex column a-start j-s__between">
        <h2>Instagram</h2>
        <ul className="navItem_container">
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
          <NavItem Icon={ThreadIcon} iconClass={'custom_sidebar_icon'} text="Threads" />

          <NavItem Icon={HamMenuIcon} iconClass={'custom_sidebar_icon'} text="More" />
        </ul>
      </aside>
    </div>
  );
}

function NavItem({ Icon, iconClass, text, profile_img, imgSrc, alt, imgClass }) {
  return (
    <li className="nav_item_li t ">
      {profile_img && <img className={imgClass} src={imgSrc} alt={alt} />}
      {Icon && <Icon className={iconClass} />}
      <p>{text}</p>
    </li>
  );
}

export default Sidebar;
