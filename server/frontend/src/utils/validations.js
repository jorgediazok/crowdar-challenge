export const validate = (values) => {
  const errors = {};
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = 'Por favor ingrese un nombre';
  }
  if (!values.file) {
    errors.file = 'Debe subir un archivo';
  }
  if (!values.type) {
    errors.type = 'Por favor ingrese un tipo';
  }
  if (!values.owner) {
    errors.owner = 'Ingrese el dueño del archivo';
  }
  return errors;
};
