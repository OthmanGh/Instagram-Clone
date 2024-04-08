import React, { useState } from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Split from './Split';
import FacebookIcon from '@mui/icons-material/Facebook';

function LoginForm({ setCredentials, credentials }) {
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const { emailNumber, password } = credentials;
    if (emailNumber.trim() && password.trim()) {
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

      <fieldset className="inputs_container flex column">
        <InputField type="text" placeholder="Mobile Number or Email" onChange={(e) => handleInputChange('emailNumber', e.target.value)} required={true} />

        <InputField type="password" placeholder="password" onChange={(e) => handleInputChange('password', e.target.value)} required={true} />
      </fieldset>

      <Button custom_class="auth-btns p t" text="Log in" bgColor="light-blue" textColor="white" disabled={!isFormValid} onClick={handleSubmit} />

      <Split />

      <p className="login_with_facebook flex a-center j-center">
        <FacebookIcon className="custom_facebook_icon" /> Log in with facebook
      </p>
      <p className="forgot_password">Forgot password</p>
    </div>
  );
}

export default LoginForm;
