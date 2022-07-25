import { useEffect, useState } from 'react';
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
    return () => {};
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
