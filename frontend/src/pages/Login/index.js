import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import LoginForm from '../../components/LoginForm/LoginForm';
import Spinner from '../../components/Spinner/Spinner';
import './Login.css';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
    setLoading(false);
  };

  if (loading) return <Spinner />;

  return (
    <LoginForm
      handleChange={handleChange}
      switchMode={switchMode}
      handleSubmit={handleSubmit}
      isSignup={isSignup}
    />
  );
};

export default Login;
