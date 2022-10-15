import React from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  document.title = 'ICasei - Search';
  function handleClick() {  
    navigate('/search');
  }
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              placeholder="Pesquisar"
              value=""
            />
          </label>
          <button
            type="button"
            onClick={ handleClick}
          >
            Buscar
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default Search;



