import Button from '../../../components/Button';
import Split from './Split';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useForm } from 'react-hook-form';

const validator = require('./validator.js');

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (userInputs) => {
    console.log(userInputs);
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

      <Split />

      <p className="login_with_facebook flex a-center j-center">
        <FacebookIcon className="custom_facebook_icon" /> Log in with facebook
      </p>
      <p className="forgot_password">Forgot password</p>
    </form>
  );
}

export default LoginForm;
