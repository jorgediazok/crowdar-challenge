import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createDocument } from '../../actions/documents';
import { validate } from '../../utils/validations';
import Spinner from '../Spinner/Spinner';
import './CreateForm.css';

const initialState = {
  name: '',
  file: '',
  type: '',
  owner: '',
  description: '',
};

const CreateForm = () => {
  const [documentData, setDocumentData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const newDocumentCreated = useSelector(
    (state) => state.documents.documentCreated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate(documentData);
    if (Object.keys(result).length > 0) {
      setFormErrors(result);
      return;
    }
    setLoading(true);
    dispatch(createDocument(documentData));
  };

  useEffect(() => {
    if (newDocumentCreated && loading) {
      setLoading(false);
      navigate('/');
    }
  }, [newDocumentCreated, loading, navigate]);

  if (loading) return <Spinner />;

  return (
    <div className='createForm__container'>
      <div className='createForm'>
        <h4 className='createForm__title'>Crear Documento</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Nombre del Documento</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              onChange={handleChange}
            />
            <p className='createForm__errors'>{formErrors.name}</p>
          </div>

          <div className='mb-3'>
            <label className='form-label'>Seleccionar Documento</label>
            <FileBase
              type='file'
              multiple={false}
              className='form-control'
              id='file'
              name='file'
              onDone={({ base64 }) =>
                setDocumentData({ ...documentData, file: base64 })
              }
            />
            <p className='createForm__errors'>{formErrors.file}</p>
          </div>

          <div className='mb-3'>
            <label htmlFor='' className='form-label'>
              Tipo de Documento
            </label>
            <select
              className='form-control'
              name='type'
              onChange={handleChange}
            >
              <option></option>
              <option>Público</option>
              <option>Privado</option>
              <option>Draft</option>
            </select>
            <p className='createForm__errors'>{formErrors.type}</p>
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
            <p className='createForm__errors'>{formErrors.owner}</p>
          </div>

          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Descripción
            </label>
            <textarea
              type='text'
              name='description'
              className='form-control'
              id='description'
              onChange={handleChange}
            />
          </div>

          <div className='createForm__button__container'>
            <button type='submit' className='btn createForm__button'>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
