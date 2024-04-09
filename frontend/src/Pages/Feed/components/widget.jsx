import React from 'react';
import RoundedImage from '../../../components/RoundedImg';

function Widget() {
  return (
    <div className="widget_container flex column">
      <UserInfo
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
        imgClass="widget_profile_pic"
        username="Othman_ghandour"
        fullName="Othman Ghandour"
        buttonText="switch"
      />
      <Suggestions />
    </div>
  );
}

function Suggestions() {
  return (
    <div className="suggestions_container flex column">
      <div className="flex a-center j-s__between">
        <h3>Suggested for you</h3>
        <p>See All</p>
      </div>
      <ul className="flex column suggested_users ">
        <li>
          <UserInfo
            src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            imgClass="widget_profile_pic"
            username="list_1212"
            fullName="suggested for you"
            buttonText="follow"
          />
        </li>

        <li>
          <UserInfo
            src="https://plus.unsplash.com/premium_photo-1673512198690-6439132f3187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            imgClass="widget_profile_pic"
            username="Jack"
            fullName="suggested for you"
            buttonText="follow"
          />
        </li>

        <li>
          <UserInfo
            src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
            imgClass="widget_profile_pic"
            username="Alexa"
            fullName="suggested for you"
            buttonText="follow"
          />
        </li>
      </ul>
    </div>
  );
}

function UserInfo({ src, imgClass, username, fullName, buttonText, buttonAction, text }) {
  return (
    <div className="user_info_container flex a-center j-s__between">
      <div className="flex a-center">
        <RoundedImage src={src} imgClass={`${imgClass}`} />
        <div className="flex column">
          <span className="f-s__b">{username}</span>
          <span className="f-l">{fullName}</span>
        </div>
      </div>
      <p className="switch_account t">{buttonText}</p>
    </div>
  );
}

export default Widget;
