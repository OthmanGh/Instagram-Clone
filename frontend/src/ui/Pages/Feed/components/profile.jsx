import React, { useState } from 'react';
import { PostIcon, EditIcon } from '../export';
import Overlay from '../../../components/Overlay';
import RoundedImage from '../../../components/RoundedImg';

function Profile() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [bio, setBio] = useState('bio...');
  const [username, setUsername] = useState('username');
  const [caption, setCaption] = useState('');
  const [postImage, setPostImage] = useState('');
  const [profileImage, setProfileImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZTCX8XqSIC1QUe5HyP7SJ5__Ms7DdpKtYw&s');

  /* Post Popup */
  const handleCaption = (e) => {
    setCaption(e.target.value);
  };

  const handlePostImage = (e) => {
    const file = e.target.files[0]; // array of files since we can add one or multiple images or files of type file
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPostImage(reader.result);
    };

    console.log(file);
  };

  const handlePostSubmit = () => {};

  /* Profile Popup */
  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImage(reader.result);
    };
  };

  const handleBioChange = (e) => {};

  const handleUsernameChange = (e) => {};

  /* Toggling Popups */
  const toggleAddPopup = () => {
    setShowAddPopup(!showAddPopup);
  };

  const toggleEditPopup = () => {
    setShowEditPopup(!showEditPopup);
  };

  return (
    <div className="profile_container">
      <ProfileHeader onEditProfile={toggleEditPopup} profileImage={profileImage} username={username} bio={bio} />

      <div className="post_icon_container t" onClick={toggleAddPopup}>
        <PostIcon className="add_post_icon" />
      </div>

      <hr className="separator_profile" />
      {showAddPopup && <AddPostPopup onClose={toggleAddPopup} onCaption={handleCaption} onPostImage={handlePostImage} onSubmit={handlePostSubmit} />}

      {showEditPopup && (
        <EditProfilePopup onClose={toggleEditPopup} onProfileImage={handleProfileImage} onUsername={handleUsernameChange} onBio={handleBioChange} />
      )}
    </div>
  );
}

function ProfileHeader({ onEditProfile, profileImage, username, bio }) {
  return (
    <div className="profile_header_container flex a-center j-s__between">
      <RoundedImage src={profileImage} imgClass="profile_img" />

      <div className="flex profile_user_info column">
        <div className="flex a-center j-s__between">
          <p>{username}</p>
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
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
}

function AddPostPopup({ onClose, onCaption, onPostImage, onSubmit }) {
  return (
    <>
      <div className="flex a-center column j-center add_post_popup">
        <fieldset>
          <label>Add your caption:</label>
          <input type="text" id="caption" placeholder="Caption..." onChange={onCaption} />
        </fieldset>

        <fieldset>
          <label htmlFor="upload_image" className="upload_image_container t">
            Upload image
            <EditIcon className="custom_edit_icon" />
          </label>
          <input type="file" onChange={(e) => onPostImage(e)} name="post_image" id="upload_image" accept="image/*" className="hidden" />
        </fieldset>
        <button className="submit" onClick={onSubmit}>
          add Post
        </button>
        <p className="custom_close" onClick={onClose}>
          x
        </p>
      </div>
      <Overlay />
    </>
  );
}

function EditProfilePopup({ onClose, onSubmit, onProfileImage, onBio, onUsername, username, bio }) {
  return (
    <>
      <div className="flex a-center column j-center add_post_popup">
        <fieldset>
          <label>Edit username</label>
          <input type="text" placeholder="Username" value={username} onChange={onUsername} />
        </fieldset>

        <fieldset>
          <label>Edit your bio</label>
          <input type="text" placeholder="Bio..." value={bio} onChange={onBio} />
        </fieldset>

        <fieldset>
          <label htmlFor="profile_img" className="upload_image_container  t">
            Upload image
            <EditIcon className="custom_edit_icon" />
          </label>
          <input id="profile_img" type="file" onChange={onProfileImage} className="hidden" />
        </fieldset>

        <button className="submit" onClick={onSubmit}>
          Save Changes
        </button>
        <p className="custom_close" onClick={onClose}>
          x
        </p>
      </div>
      <Overlay />
    </>
  );
}

export default Profile;
