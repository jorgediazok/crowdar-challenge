import { useSelector, useDispatch } from 'react-redux';
import { FcViewDetails } from 'react-icons/fc';
import { ImFolderDownload } from 'react-icons/im';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deleteDocument } from '../../actions/documents';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Table.css';

const Table = () => {
  const { documents } = useSelector((state) => state.documents);
  const dispatch = useDispatch();
  toast.configure();
  const notify = () => {
    toast('Documento eliminado.', { position: toast.POSITION.TOP_LEFT });
  };

  const removeDocument = (id) => {
    dispatch(deleteDocument(id));
    notify();
  };

  return (
    <>
      <table className='table tableContainer'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Tipo</th>
            <th scope='col'>Dueño</th>
            <th scope='col'>Descargar</th>
            <th scope='col'>Detalles</th>
            <th scope='col'>Editar</th>
            <th scope='col'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {documents?.map((document) => (
            <tr key={document._id}>
              <th scope='row'>{document.name}</th>
              <td>{moment(document.createdAt).format('LL')}</td>
              <td>{document.type}</td>
              <td>{document.owner}</td>
              <td>
                <ImFolderDownload size={25} style={{ cursor: 'pointer' }} />
              </td>
              <td>
                <Link to={`/${document._id}`}>
                  <FcViewDetails size={25} style={{ cursor: 'pointer' }} />
                </Link>
              </td>
              <td>
                <AiFillEdit size={25} style={{ cursor: 'pointer' }} />
              </td>
              <td>
                <AiFillDelete
                  size={25}
                  style={{ cursor: 'pointer' }}
                  onClick={() => removeDocument(document._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
