import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__actions'>
        <Search />
        <Link to='/crear'>
          <button className='home__actions__create'>
            Crear <i className='fa fa-plus' />
          </button>
        </Link>
      </div>
      <Table />
    </div>
  );
};

export default Home;
