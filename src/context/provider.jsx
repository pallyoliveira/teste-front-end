import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSearch, setSearch] = useState(false);
  const [search, setSearchVideos] = useState('');
  const [startVideo, setStartVideo] = useState([]);
  const [classAnimation, setClassAnimation] = useState("");
  const [data, setData] = useState([]);
  const [videoBoolean, setVideoBoolean] = useState(false);

  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
    isSearch,
    setSearch,
    search,
    setSearchVideos,
    startVideo, setStartVideo,
    setClassAnimation,  
    classAnimation,
    data, setData,
    videoBoolean, setVideoBoolean
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