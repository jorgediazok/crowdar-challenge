import FileBase from 'react-file-base64';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDocument } from '../../actions/documents';
import { validate } from '../../utils/validations';
import { updateDocument } from '../../actions/documents';
import Spinner from '../../components/Spinner/Spinner';

const Edit = () => {
  const { id } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { document: initialDocument } = useSelector((state) => state.documents);
  const documentIsEdited = useSelector(
    (state) => state.documents.documentEdited
  );
  const [loading, setLoading] = useState(false);
  const [documentData, setDocumentData] = useState({
    name: '',
    file: '',
    type: '',
    owner: '',
    description: '',
  });

  useEffect(() => {
    dispatch(fetchDocument(id));
    return () => console.log('clean');
  }, [id, dispatch]);

  useEffect(() => {
    setDocumentData({
      name: initialDocument?.name,
      file: initialDocument?.file,
      type: initialDocument?.type,
      owner: initialDocument?.owner,
      description: initialDocument?.description,
    });
  }, [
    initialDocument?.description,
    initialDocument?.file,
    initialDocument?.name,
    initialDocument?.owner,
    initialDocument?.type,
  ]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(updateDocument(id, documentData));
  };

  useEffect(() => {
    if (documentIsEdited && loading) {
      setLoading(false);
      navigate('/');
    }
  }, [documentIsEdited, loading, navigate]);

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
              value={documentData?.name}
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Seleccionar Documento</label>
            <FileBase
              type='file'
              multiple={false}
              className='form-control'
              value={documentData?.file}
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
              value={documentData?.type}
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
              value={documentData?.value}
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
              value={documentData?.description}
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
