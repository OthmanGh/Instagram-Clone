import React from 'react';
import Button from '../../../components/Button';
import Split from './Split';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useForm } from 'react-hook-form';
import { validator } from '../../../../core/tools/validator';
import { fetchData } from '../../../../core/tools/fetchAuth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (userInputs) => {
    try {
      const data = await fetchData(userInputs, 'login', 'POST');

      if (data.status === 200) {
        localStorage.setItem('token', data.token);
        navigate('/feed');
        return;
      }

      const error = JSON.parse(data);

      throw error;
    } catch (e) {
      const { message, error } = e;
      console.log(error);
      console.log(message);

      setError('root', {
        message: error,
      });
    }
  };

  return (
    <form className="auth_form_container flex column a-center j-start" onSubmit={handleSubmit(onSubmit)}>
      <h2>Instagram</h2>

      <fieldset className="inputs_container flex column">
        <input
          {...register('email', {
            required: 'Email is required',
            validate: (email) => validator.email(email),
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email.message}</div>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            validate: (password) => validator.password(password),
          })}
        />
        {errors.password && <div className="error">{errors.password.message}</div>}
      </fieldset>

      <Button custom_class="auth-btns p t" text="Log in" bgColor="light-blue" textColor="white" />

      {errors.root && <div className="error">{errors.root.message}</div>}

      <Split />

      <p className="login_with_facebook flex a-center j-center">
        <FacebookIcon className="custom_facebook_icon" /> Log in with facebook
      </p>
      <p className="forgot_password">Forgot password</p>
    </form>
  );
}

export default LoginForm;
