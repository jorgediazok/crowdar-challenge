import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <h2 className='details__title'>Detalles de "Nombre(LINK DE DESCARGA)"</h2>
      <div className='details__container'>
        <ul className='list-group details__list'>
          <li className='list-group-item'>Fecha de Subida: </li>
          <li className='list-group-item'>Owner: </li>
          <li className='list-group-item'>Descripción: </li>
          <li className='list-group-item'>Usuarios relacionados: </li>
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
    </>
  );
};

export default Details;
