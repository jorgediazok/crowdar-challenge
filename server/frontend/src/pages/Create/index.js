import { useState } from 'react';
import CreateForm from '../../components/CreateForm/CreateForm';

const Create = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <CreateForm isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  );
};

export default Create;
