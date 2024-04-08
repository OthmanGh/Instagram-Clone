import React, { useEffect, useState } from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Split from './Split';

function SignupForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    fullName: '',
    userName: '',
    password: '',
  });

  const [errors, setErrors] = useState({ email: '', password: '', userName: '', fullName: '' });

  useEffect(() => {
    const newErrors = {};
    if (!credentials.email.includes('@')) {
      newErrors.email = 'Invalid email';
    } else {
      newErrors.email = '';
    }

    if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
  }, [credentials]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="auth_form_container flex column a-center j-start" onSubmit={handleSubmit}>
      <h2>Instagram</h2>
      <p className="paragraph">Sign up to see photos and videos from your friends.</p>

      <Button custom_class="auth-btns t p" text="Log in with Facebook" bgColor="light-blue" textColor="white" />

      <Split />

      <fieldset className="inputs_container flex column">
        <InputField type="email" name="email" onChange={handleChange} placeholder="Email" required={true} />
        {/* {errors.email && <p className="error">{errors.email}</p>} */}

        <InputField type="text" name="fullName" onChange={handleChange} placeholder="Full Name" required={true} />
        {/* {errors.fullName && <p className="error">{errors.fullName}</p>} */}

        <InputField type="text" name="userName" onChange={handleChange} placeholder="Username" required={true} />
        {/* {errors.userName && <p className="error">{errors.userName}</p>} */}

        <InputField type="password" onChange={handleChange} name="password" placeholder="Password" required={true} />
        {/* {errors.password && <p className="error">{errors.password}</p>} */}
      </fieldset>

      <p className="f-ss p_links">
        People who use our service may have uploaded your contact information to Instagram.
        <a className="" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </p>

      <p className="f-ss">
        By signing up, you agree to our
        <a href="https://help.instagram.com/581066165581870/?locale=en_US" target="_blank" rel="noopener noreferrer">
          Terms
        </a>
        ,
        <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        and
        <a href="https://privacycenter.instagram.com/policies/cookies/" target="_blank" rel="noopener noreferrer">
          Cookies Policy
        </a>
        .
      </p>

      <Button custom_class="auth-btns p t" text="Sign up" bgColor="light-blue" textColor="white" />
    </div>
  );
}

export default SignupForm;
