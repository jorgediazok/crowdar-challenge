import { useEffect } from 'react';
import Table from '../../components/Table/Table';
import Auth from '../../auth/Auth';
import { useDispatch } from 'react-redux';
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
        <Table />
      </div>
    </Auth>
  );
};

export default Home;
