import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSearch, setSearch] = useState(false);
  const [search, setSearchVideos] = useState('');
  const [startVideo, seStartVideo] = useState([]);

  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
    isSearch,
    setSearch,
    search,
    setSearchVideos,
    startVideo, seStartVideo
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;