import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createDocument } from '../../services';

import './CreateForm.css';
import Spinner from '../Spinner/Spinner';

const initialState = {
  name: '',
  file: '',
  type: '',
  owner: '',
  description: '',
};

const CreateForm = () => {
  const [documentData, setDocumentData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleChange = (e) =>
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(createDocument(documentData, navigate));
    setLoading(false);
  };

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
