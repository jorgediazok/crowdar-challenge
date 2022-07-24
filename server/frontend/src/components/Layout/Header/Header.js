import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../../../constants/actionTypes';
import decode from 'jwt-decode';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate('/login');
    setUser(null);
  };

  console.log(user);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user?.token]);

  return (
    <header className='topbar'>
      <div className='topLeft'>
        <Link to='/' style={{ color: '#fff' }}>
          <span className='topbarLogo'>Crowdar</span>
        </Link>
      </div>
      {user?.result && (
        <div className='topRight'>
          <p className='topRightEmail'>{user.result.email}</p>
          <button className='topRightButton' onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
