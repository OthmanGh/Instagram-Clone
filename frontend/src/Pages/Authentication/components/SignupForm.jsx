import React from 'react';

import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

function SignupForm() {
  return (
    <div className="auth_form_container flex column a-center j-center">
      <h2>Instagram</h2>

      <p className="paragraph ">Sign up to see photos and videos from your friends.</p>
      <Button custom_class="auth-btns t p" text="Log in with Facebook" bgColor="light-blue" textColor="white" />

      <div className="split-div flex a-center j-s__evenly f-w">
        <hr className="f-w" />
        <span>OR</span>
        <hr className="f-w" />
      </div>

      <fieldset className="inputs_container flex column">
        <InputField type="text" placeholder="Mobile Number or Email" required={true} />

        <InputField type="text" placeholder="Full Name" required={true} />

        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="password" />
      </fieldset>

      <p className="f-ss">
        People who use our service may have uploaded your contact information to Instagram.{' '}
        <a className="" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">
          Learn More
        </a>
      </p>

      <p className="f-ss">
        By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_US">Terms</a>,
        <a href="https://www.facebook.com/privacy/policy">Privacy Policy</a> and
        <a href="https://privacycenter.instagram.com/policies/cookies/"> Cookies Policy</a> .
      </p>

      <Button custom_class="auth-btns p t" text="Sign up" bgColor="light-blue" textColor="white" />
    </div>
  );
}

export default SignupForm;
