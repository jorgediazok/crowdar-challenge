import './CreateForm.css';

const CreateForm = ({ isEditing, setIsEditing }) => {
  return (
    <div className='createForm'>
      <h4 className='createForm__title'>
        {isEditing ? 'Editar Documento' : 'Crear Documento'}
      </h4>
      <form>
        <div className='mb-3'>
          <label htmlFor='selectDocument' className='form-label'>
            Seleccionar Documento
          </label>
          <input type='file' className='form-control' id='file' />
        </div>

        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Tipo de Documento
          </label>
          <select className='form-control'>
            <option>Público</option>
            <option>Privado</option>
            <option>Draft</option>
          </select>
        </div>

        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Dueño
          </label>
          <select className='form-control'>
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
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>

        <div className='createForm__button__container'>
          <button type='submit' className='btn createForm__button'>
            {isEditing ? 'Editar' : 'Crear'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
