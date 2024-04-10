import React, { useState } from 'react';
import { PostIcon } from '../export';
import Overlay from '../../../components/Overlay';
import RoundedImage from '../../../components/RoundedImg';

function Profile() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const toggleAddPopup = () => {
    setShowAddPopup(!showAddPopup);
  };

  const toggleEditPopup = () => {
    setShowEditPopup(!showEditPopup);
  };

  return (
    <div className="profile_container">
      <ProfileHeader onEditProfile={toggleEditPopup} />
      <div className="post_icon_container t" onClick={toggleAddPopup}>
        <PostIcon className="add_post_icon" />
      </div>
      <hr className="separator_profile" />
      {showAddPopup && <AddPostPopup onClose={toggleAddPopup} />}
      {showEditPopup && <EditProfilePopup onClose={toggleEditPopup} />}
    </div>
  );
}

function ProfileHeader({ onEditProfile }) {
  return (
    <div className="profile_header_container flex a-center j-s__between">
      <RoundedImage
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="profile_img"
      />
      <div className="flex profile_user_info column">
        <div className="flex a-center j-s__between">
          <p>username</p>
          <button onClick={onEditProfile}>Edit profile</button>
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
        <p className="bio">bio...</p>
      </div>
    </div>
  );
}

function AddPostPopup({ onClose }) {
  return (
    <>
      <div className="flex a-center column j-center add_post_popup">
        <input type="text" placeholder="Caption..." />
        <input type="file" />
        <button className="submit">add Post</button>
        <p className="custom_close" onClick={onClose}>
          x
        </p>
      </div>
      <Overlay />
    </>
  );
}

function EditProfilePopup({ onClose }) {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <div className="flex a-center column j-center add_post_popup">
        <label>Edit username</label>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />

        <label>Edit your bio</label>
        <input type="text" placeholder="Bio..." value={bio} onChange={handleBioChange} />

        <label htmlFor="profile_img">Modify Image</label>
        <input id="profile_img" type="file" onChange={handleImageChange} />

        <button className="submit">Save Changes</button>
        <p className="custom_close" onClick={onClose}>
          x
        </p>
      </div>
      <Overlay />
    </>
  );
}

export default Profile;
