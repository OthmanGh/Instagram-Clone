import React from 'react';

import { BsOutlet } from 'react-icons/bs';

import { PostIcon } from '../export';

import RoundedImage from '../../../components/RoundedImg';

function Profile() {
  return (
    <div className="profile_container">
      <ProfileHeader />
      <PostIcon className="add_post_icon" />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="profile_header_container flex a-center j-s__between">
      <RoundedImage
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="profile_img"
      />

      <div className="flex profile_user_info column">
        <div className="flex a-center j-s__between">
          <p>username</p>
          <button>Edit profile</button>
        </div>

        <div className="flex a-center j-s__between">
          <p>
            <span>1</span> post
          </p>
          <p>
            <span>200</span> followers
          </p>
          <p>
            <span>140</span> following
          </p>
        </div>

        <div>
          <p>full name</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
