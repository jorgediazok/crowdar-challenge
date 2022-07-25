import FileBase from 'react-file-base64';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDocument } from '../../actions/documents';
import { updateDocument } from '../../actions/documents';
import Spinner from '../../components/Spinner/Spinner';

const Edit = () => {
  const { id } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { document } = useSelector((state) => state.documents);
  const [loading, setLoading] = useState(false);
  const [documentData, setDocumentData] = useState({
    name: '',
    file: '',
    type: '',
    owner: '',
    description: '',
  });

  console.log(document);

  useEffect(() => {
    dispatch(fetchDocument(id));

    return () => console.log('clean');
  }, [id, dispatch]);

  const handleChange = (e) =>
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(updateDocument(id, documentData));
    navigate('/');
    setLoading(false);
  };

  if (loading) return <Spinner />;

  return (
    <div className='createForm__container'>
      <div className='createForm'>
        <h4 className='createForm__title'>Editar Documento</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Nombre del Documento</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              defaultValue={document?.name}
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Seleccionar Documento</label>
            <FileBase
              type='file'
              multiple={false}
              className='form-control'
              defaultValue={document?.file}
              id='file'
              name='file'
              onDone={({ base64 }) =>
                setDocumentData({ ...documentData, file: base64 })
              }
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='' className='form-label'>
              Tipo de Documento
            </label>
            <select
              className='form-control'
              name='type'
              defaultValue={document?.type}
              onChange={handleChange}
            >
              <option></option>
              <option>Público</option>
              <option>Privado</option>
              <option>Draft</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='' className='form-label'>
              Dueño
            </label>
            <select
              className='form-control'
              name='owner'
              onChange={handleChange}
            >
              <option></option>
              <option value={user?.result?._id}>{user?.result.email}</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Descripción
            </label>
            <textarea
              type='text'
              name='description'
              defaultValue={document?.description}
              className='form-control'
              id='description'
              onChange={handleChange}
            />
          </div>

          <div className='createForm__button__container'>
            <button type='submit' className='btn createForm__button'>
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
