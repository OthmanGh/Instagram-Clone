import React, { useState } from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Split from './Split';

function SignupForm({ setCredentials, credentials }) {
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const { emailNumber, fullName, userName, password } = credentials;
    if (emailNumber.trim() && fullName.trim() && userName.trim() && password.trim()) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputChange = (field, value) => {
    setCredentials({ ...credentials, [field]: value });
    checkFormValidity();
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Form submitted:', credentials);
    } else {
      console.log('Please fill all fields.');
    }
  };

  return (
    <div className="auth_form_container flex column a-center j-start">
      <h2>Instagram</h2>
      <p className="paragraph">Sign up to see photos and videos from your friends.</p>

      <Button custom_class="auth-btns t p" text="Log in with Facebook" bgColor="light-blue" textColor="white" />

      <Split />

      <fieldset className="inputs_container flex column">
        <InputField
          type="text"
          placeholder="Mobile Number or Email"
          onChange={(e) => setCredentials({ ...credentials, emailNumber: e.target.value })}
          required={true}
        />

        <InputField type="text" placeholder="Full Name" onChange={(e) => ({ ...credentials, fullName: e.target.value })} required={true} />

        <InputField type="text" placeholder="Username" onChange={(e) => ({ ...credentials, userName: e.target.value })} required={true} />

        <InputField type="password" placeholder="Password" onChange={(e) => ({ ...credentials, password: e.target.value })} required={true} />
      </fieldset>

      <p className="f-ss p_links">
        People who use our service may have uploaded your contact information to Instagram.
        <a className="" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">
          Learn More
        </a>
      </p>

      <p className="f-ss">
        By signing up, you agree to our
        <a href="https://help.instagram.com/581066165581870/?locale=en_US">Terms</a>,<a href="https://www.facebook.com/privacy/policy">Privacy Policy</a> and
        <a href="https://privacycenter.instagram.com/policies/cookies/">Cookies Policy</a>.
      </p>

      <Button custom_class="auth-btns p t" text="Sign up" bgColor="light-blue" textColor="white" disabled={!isFormValid} />
    </div>
  );
}

export default SignupForm;
