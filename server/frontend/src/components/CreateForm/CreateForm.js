import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createDocument, updateDocument } from '../../services';

import './CreateForm.css';

const initialState = {
  name: '',
  file: '',
  type: '',
  owner: '',
  description: '',
};

const CreateForm = ({ isEditing, setIsEditing }) => {
  const [documentData, setDocumentData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });

  const clear = () => {
    setDocumentData({ initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDocument({ documentData }));
    clear();
    navigate('/');
  };

  console.log(documentData);

  return (
    <div className='createForm__container'>
      <div className='createForm'>
        <h4 className='createForm__title'>
          {isEditing ? 'Editar Documento' : 'Crear Documento'}
        </h4>
        <form
          method='post'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <div className='mb-3'>
            <label htmlFor='selectDocument' className='form-label'>
              Nombre del Documento
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='selectDocument' className='form-label'>
              Seleccionar Documento
            </label>
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
              <option>Jorge</option>
              <option>Manu</option>
              <option>Rochi</option>
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
              {isEditing ? 'Editar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
