import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//  https://www.npmjs.com/package/react-player


function Details() {
  document.title = 'Icasei - Details';
  useEffect(() => {
  }, []);
  return (
    <>
      <img
        src=""
        alt=""
        width="30%"
      />
    </>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;