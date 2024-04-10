import React from 'react';
import Button from '../../../components/Button';
import Split from './Split';
import { useForm } from 'react-hook-form';
import { validator } from '../../../../core/tools/validator';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (userInputs) => {
    try {
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth_form_container flex column a-center j-start">
      <h2>Instagram</h2>
      <p className="paragraph">Sign up to see photos and videos from your friends.</p>

      <Button custom_class="auth-btns t p" text="Log in with Facebook" bgColor="light-blue" textColor="white" />

      <Split />

      <fieldset className="inputs_container flex column">
        <input
          {...register('email', {
            required: 'Email is required',
            validate: (email) => validator.email(email),
          })}
          type="email"
          className="auth-inputs"
          placeholder="Email"
        />

        {errors.email && <div class="error">{errors.email.message}</div>}

        <input
          {...register('username', {
            required: 'Username is required',
            validate: (username) => validator.username(username),
          })}
          type="text"
          className="auth-inputs"
          placeholder="Username"
        />

        {errors.username && <div className="error">{errors.username.message}</div>}

        <input
          type="text"
          className="auth-inputs"
          placeholder="Full Name"
          {...register('full_name', {
            required: 'Full Name is required',

            validate: (full_name) => validator.full_name(full_name),
          })}
        />

        {errors.full_name && <div className="error">{errors.full_name.message}</div>}

        <input
          type="password"
          className="auth-inputs"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            validate: (password) => validator.password(password),
          })}
        />

        {errors.password && <div className="error">{errors.password.message}</div>}
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
      </p>

      <Button custom_class="auth-btns p t" text="Sign up" bgColor="light-blue" textColor="white" />
    </form>
  );
}

export default SignupForm;
