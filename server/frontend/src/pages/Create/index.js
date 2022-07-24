import { useState } from 'react';
import Auth from '../../auth/Auth';
import CreateForm from '../../components/CreateForm/CreateForm';

const Create = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Auth>
      <div>
        <CreateForm isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>
    </Auth>
  );
};

export default Create;
