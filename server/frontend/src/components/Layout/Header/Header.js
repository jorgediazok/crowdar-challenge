import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <Link to='/' style={{ color: '#fff' }}>
            <span className='topbarLogo'>Crowdar</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
