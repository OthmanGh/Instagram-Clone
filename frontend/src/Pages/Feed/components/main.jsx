import React from 'react';
import RoundedImage from '../../../components/RoundedImg';
import '../export.js';
import { CommentIcon, DotsIcon, HeartIcon, SaveIcon, ShareIcon } from '../export.js';

function MainContent() {
  return (
    <main className="main_content_container flex column">
      <Header />
      <Stories />
      <Posts />
    </main>
  );
}

function Header() {
  return (
    <div>
      <ul className="flex">
        <li>
          <p>For you</p>
        </li>
        <li>
          <p>Following</p>
        </li>
      </ul>
      <hr />
    </div>
  );
}

function Stories() {
  return (
    <ul className="stories_container flex ">
      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />
      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />
      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />
      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />
      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />

      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />

      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />

      <Story
        username="Othman Al Ghandour"
        imgSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="story_img"
      />
    </ul>
  );
}

function Story({ username, imgSrc }) {
  return (
    <li className="story">
      <RoundedImage src={imgSrc} imgClass="story_img" />
      <p>{username.length > 10 ? username.slice(0, 5) + '....' : username}</p>
    </li>
  );
}

function Posts() {
  return (
    <ul className="posts_container flex column">
      <Post
        imgSrc="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8fDA%3D"
        profile_img_src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        username="Othman"
        text="This eclipse is giving me Java 1 flashbacks😰
        Follow @coding_comedy for more!"
      />

      <Post
        imgSrc="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8fDA%3D"
        profile_img_src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        username="Othman"
        text="This eclipse is giving me Java 1 flashbacks😰
        Follow @coding_comedy for more!"
      />
    </ul>
  );
}

function Post({ imgSrc, profile_img_src, text, username }) {
  return (
    <li className="post_container flex column">
      <div className="flex a-center j-s__between post_header">
        <div className="flex a-center post_user_info">
          <RoundedImage src={profile_img_src} imgClass="post_profile_img" />
          <p>{username}</p>
        </div>
        <DotsIcon />
      </div>

      <img src={imgSrc} className="post_img" alt="" />

      <div className="bottom_post_icons_container flex a-center j-s__between">
        <div className="flex a-center j-center">
          <HeartIcon className="custom_post_icon" />
          <CommentIcon className="custom_post_icon" />
          <ShareIcon className="custom_post_icon" />
        </div>
        <SaveIcon className="custom_post_icon" />
      </div>

      <div className="post_text_container flex a-center ">
        <p>{username}</p>
        <p className="f-l">{text.length > 60 ? text.slice(0, 50) + ' See more...' : text}</p>
      </div>

      <div>
        <span className="f-l f-s view_comments">View All Comments....</span>
      </div>

      <div>
        <input className="comment_input" type="text" placeholder="Add a comment..." />
      </div>
    </li>
  );
}

export default MainContent;
