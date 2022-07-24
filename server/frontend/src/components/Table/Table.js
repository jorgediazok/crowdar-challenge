import { FcViewDetails } from 'react-icons/fc';
import { ImFolderDownload } from 'react-icons/im';
import { AiFillEdit } from 'react-icons/ai';
import './Table.css';

const Table = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <ImFolderDownload size={25} style={{ cursor: 'pointer' }} />
            </td>
            <td>
              <FcViewDetails size={25} style={{ cursor: 'pointer' }} />
            </td>
            <td>
              <AiFillEdit size={25} style={{ cursor: 'pointer' }} />
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <ImFolderDownload size={25} />
            </td>
            <td>
              <FcViewDetails size={25} />
            </td>
            <td>
              <AiFillEdit size={25} />
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <ImFolderDownload size={25} />
            </td>
            <td>
              <FcViewDetails size={25} />
            </td>
            <td>
              <AiFillEdit size={25} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
