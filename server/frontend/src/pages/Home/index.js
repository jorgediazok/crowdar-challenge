import { useEffect } from 'react';
import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';
import Auth from '../../auth/Auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDocuments } from '../../actions/documents';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  return (
    <Auth>
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
    </Auth>
  );
};

export default Home;
