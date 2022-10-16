import React, { useContext, useEffect } from 'react';
import AppContext from '../context/context';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  document.title = 'ICasei - Search';
  const { search, setSearchVideos } = useContext(AppContext);
  function handleClick(e) {
    navigate('/videos');
  }
  useEffect(() => {
  }, [search]);

  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              placeholder="Pesquisar"
              value={search}
              onChange={({ target }) => setSearchVideos(target.value)}
            />
          </label>
          <button
            type="button"
            onClick={(e) => handleClick(e)}
          >
            Buscar
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default Search;




