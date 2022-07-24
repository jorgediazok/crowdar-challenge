import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../../auth/Auth';
import { fetchDocument } from '../../actions/documents';
import moment from 'moment';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { document } = useSelector((state) => state.documents);

  console.log(document);

  useEffect(() => {
    dispatch(fetchDocument(id));
  }, [id, dispatch]);

  return (
    <Auth>
      <h3 className='details__title'>
        Detalles de{' '}
        <span className='details__title__span'>{document?.name}</span>
      </h3>
      <div className='details__container'>
        <ul className='list-group details__list'>
          <li className='list-group-item'>
            Fecha de Subida:
            <span className='details__span'>
              {moment(document?.createdAt).format('LL')}
            </span>
          </li>
          <li className='list-group-item'>
            Owner: <span className='details__span'>{document?.owner}</span>{' '}
          </li>
          <li className='list-group-item'>
            Descripción:
            <span className='details__span'>{document?.description}</span>
          </li>
          <li className='list-group-item'>
            Usuarios relacionados:{' '}
            <span className='details__span'>Usuarios</span>{' '}
          </li>
        </ul>
        <Link to='/'>
          <button
            className='home__actions__create'
            style={{ marginTop: '50px' }}
          >
            Volver
          </button>
        </Link>
      </div>
    </Auth>
  );
};

export default Details;
