import { useRef, useEffect } from 'react';
import './Search.css';

const Search = ({ query, setQuery }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className='form-inline d-flex md-form form-sm searchForm'>
      <input
        className='form-control form-control-sm mr-3 shadow-none w-75 searchInput'
        type='text'
        ref={inputRef}
        placeholder='Buscar por Nombre'
        aria-label='Search'
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <i className='fas fa-search' aria-hidden='true'></i>
    </form>
  );
};

export default Search;
