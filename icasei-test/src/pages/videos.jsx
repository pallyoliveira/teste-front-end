import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';
import { requestVideos } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Videos() {
  document.title = 'Icasei - Videos';
  const navigate = useNavigate();
  const { search, seStartVideo } = useContext(AppContext);
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await requestVideos(search);
      console.log(response);
      setData(response);
    }
    fetchData();
  }, [search]);

  function startVideo(video) {
    navigate(`/videos/${video.id.videoId}`);
    seStartVideo(video);
    console.log(video, 'e')
  }
  return (
    <>
      {data.map((video, index) => {
        const { title, thumbnails, description, } = video.snippet;
        return (
          <div key={index}>
            <span>{title}</span>
            <br>
            </br>
            <img onClick={() => startVideo(video)} src={thumbnails.medium.url} alt="" />
            <small>{description}</small>
          </div>);
      })}
    </>
  );
}

export default Videos;

