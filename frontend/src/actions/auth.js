import { AUTH } from '../constants/actionTypes';
import * as API from '../services/index';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//TOAST CONFIGURATION
toast.configure();

//TOAST FUNCTION
const notify = () => {
  toast('Te logueaste correctamente', { position: toast.POSITION.TOP_LEFT });
};

const notifyError = () => {
  toast('Error. Credenciales Inválidas', {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await API.signIn(formData);
    dispatch({
      type: AUTH,
      data,
    });
    navigate('/');
    notify();
  } catch (error) {
    console.log(error.message);
    notifyError();
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await API.signUp(formData);
    dispatch({
      type: AUTH,
      data,
    });
    navigate('/');
    notify();
  } catch (error) {
    console.log(error.message);
    notifyError();
  }
};
