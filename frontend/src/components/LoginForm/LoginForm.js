import Image from '../../assets/images/document.svg';
import './LoginForm.css';

const LoginForm = ({ handleSubmit, handleChange, isSignup, switchMode }) => {
  return (
    <>
      <section className='login py-5'>
        <div className='container'>
          <div className='row container__row g-0'>
            <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
              <img src={Image} alt='' className='img-fluid' />
            </div>
            <div className='col-lg-7 com-md-7 com-sm-12 col-12 text-center py-5'>
              <h1 className='animate__animated animate__zoomInDown animate__delay-0.7s'>
                Gestor de Documentos
              </h1>
              <form onSubmit={handleSubmit}>
                <div className='form-row pt-4'>
                  <div className='offset-1 col-lg-10'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange}
                      autoFocus
                      className='input__email my-3 px-3'
                    />
                  </div>
                </div>
                <div className='form-row pt-4'>
                  <div className='offset-1 col-lg-10'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange}
                      className='input__password px-3'
                    />
                  </div>
                </div>
                {isSignup && (
                  <>
                    <div className='form-row pt-4'>
                      <div className='offset-1 col-lg-10'>
                        <input
                          id='password'
                          name='confirmPassword'
                          type='password'
                          placeholder='Confirmar Password'
                          onChange={handleChange}
                          className='input__password px-3'
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className='login__account__container'>
                  <span className='login__account' onClick={switchMode}>
                    {isSignup
                      ? '¿Ya tenés una cuenta? Logueate'
                      : '¿No tenés una cuenta? Registrate'}
                  </span>
                </div>
                <div className='form-row pt-4 pb-3'>
                  <div className='offset-1 col-lg-10'>
                    <button className='btn__login mt-3' type='submit'>
                      {isSignup ? 'Registrarse' : 'Ingresar'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
