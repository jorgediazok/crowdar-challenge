import Auth from '../../auth/Auth';
import CreateForm from '../../components/CreateForm/CreateForm';

const Create = () => {
  return (
    <Auth>
      <div>
        <CreateForm />
      </div>
    </Auth>
  );
};

export default Create;
